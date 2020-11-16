import React, { Children } from "react";
import assert from "assert";
import { isPresent } from "../utils";
import { css } from "styled-components";

type ReactNodeNoStrings =
  | React.ReactElement
  | boolean
  | null
  | undefined
  | ReactNodeNoStrings[];

type Align = "left" | "center" | "right";

const alignToDisplay = {
  left: "block",
  center: "flex",
  right: "flex",
} as const;

interface UseStackItemStylesParams {
  align: Align;
  space: string;
}

const useStackItemStyles = ({ align, space }: UseStackItemClassNameParams) => {
  return css`
    padding-top: ${space};
    ${align !== "left" &&
    css`
      display: alignToDisplay[align];
      flex-direction: "column";
      align-items: alignToFlexAlign(align);
    `}
  `;
};

const validStackComponents = ["div", "ol", "ul"] as const;

interface RenderDividerParams {
  index: number;
}

export interface StackProps {
  className?: string;
  component?: typeof validStackComponents[number];
  children: ReactNodeNoStrings;
  space: string;
  align?: Align;
  renderDivider?: (params: RenderDividerParams) => React.ReactNode;
}

export const Stack = ({
  className,
  component = "div",
  children,
  space = "none",
  align = "left",
  renderDivider,
}: StackProps) => {
  assert(
    validStackComponents.includes(component),
    `Invalid Stack component: '${component}'. Should be one of [${validStackComponents
      .map((c) => `'${c}'`)
      .join(", ")}]`
  );

  const stackItemClassName = useStackItemStyles({ space, align });
  const isList = component === "ol" || component === "ul";
  const stackItemComponent = isList ? "li" : "div";

  return (
    <Box
      className={className}
      component={component}
      css={`
        margin-top: -${space};
      `}
    >
      {Children.toArray(children)
        .filter(isPresent)
        .map((child, index) => {
          return (
            <Box
              key={index}
              component={stackItemComponent}
              css={stackItemClassName}
            >
              {renderDivider && index > 0 ? (
                <div
                  css={css`
                    display: ${index === 0 ? "none" : "block"};
                    width: 100%;
                    padding-bottom: ${space};
                  `}
                >
                  {renderDivider({ index })}
                </div>
              ) : null}
              {child}
            </Box>
          );
        })}
    </Box>
  );
};

interface BoxProps {
  children: React.ReactNode;
  className?: string;
  component: typeof validStackComponents[number] | "li";
}

function Box({ children, className, component }: BoxProps) {
  return React.createElement(component, { className }, children);
}
