import * as React from "react";
import Head from "next/head";

function GrowMePage() {
  React.useEffect(() => {
    (window as any).$mediavine = {
      web: {
        model: {
          content_selector: ".mv-content-wrapper",
        },
      },
    };
  });
  return (
    <>
      <Head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              body {
                font-family: sans-serif;
              }
              header {
                display: flex;
                flex-flow: column;
                justify-content: center;
                max-width: 1000px;
                margin: 20px auto;
                padding: 50px;
                border-bottom: 1px solid #ccc;
              }
              #sidebar {
                position: relative;
                z-index: 2147483599;
                width: 30%;
              }
              .mvt-content {
                width: 70%;
                margin-right: 30px;
                line-height: 1.6em;
                letter-spacing: 0.05em;
              }
              @media (max-width: 500px) {
                #sidebar {
                  display: none;
                }
                .mvt-content {
                  width: 100%;
                }
              }`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `<script data-grow-initializer>!(function(){window.growMe||((window.growMe=function(e){window.growMe._.push(e);}),(window.growMe._=[]));var e=document.createElement("script");(e.type="text/javascript"),(e.src="https://faves.grow.me/main.js"),(e.defer=!0),e.setAttribute("data-grow-faves-site-id","U2l0ZTpkMDk0ZWEzNy1mMTEwLTQzZmItYTBhYS1kOTdmMjgwNTE4MTQ=");var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t);})();</script>`,
          }}
        />
      </Head>
      <header>
        <h1 style={{ fontSize: "48px" }}>Welcome to my cool test site!</h1>
        <h5>Isn't this the neatest thing?</h5>
      </header>
      <div style={{ padding: "0 5%" }}>
        <div style={{ overflow: "hidden" }}>
          <section className="mvt-content mv-content-wrapper">
            <h2>Main content area</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              maximus fermentum libero, sit amet ornare risus varius non. Etiam
              luctus urna eget nulla lacinia, ac cursus nibh finibus. Donec in
              vestibulum nunc, sed faucibus nulla. Nunc rutrum congue varius.
              Nam rhoncus, quam ac vestibulum aliquam, massa nisl tincidunt
              nibh, placerat interdum lacus lacus iaculis nisl. Vivamus eu purus
              augue. Ut blandit mattis neque, sit amet bibendum quam laoreet
              sagittis. Nullam lobortis scelerisque dui sit amet aliquet. Donec
              feugiat, sem nec egestas commodo, lorem neque condimentum arcu, a
              sagittis lectus ipsum eget nisi. Mauris id bibendum neque. Sed
              lacus elit, consequat sed sagittis at, congue et neque. Integer a
              sapien mauris. Cras mauris nibh, hendrerit eu orci in, mattis
              sollicitudin libero. Nunc ut sapien sed est aliquam mollis. Morbi
              dui turpis, maximus eu nulla in, lobortis malesuada massa. Donec
              at arcu sed diam sollicitudin tempor eget maximus est. Nullam
              convallis malesuada vehicula. Aenean ornare augue nisl, et
              placerat dolor tempus quis. Nulla semper et purusat porttitor.
              Aliquam bibendum malesuada enim,
            </p>
            <p>
              quis vulputate nisi. Mauris nec ultrices mi, non rutrum sapien.
              Phasellus ornare, odio non egestas sodales, sapien nisl faucibus
              quam, a dictum lorem magna vitae nibh. Nam ac nisl a erat
              consectetur malesuada. Suspendisse maximus, lorem eu suscipit
              pellentesque, orci metus mattis nunc, vitae venenatis lectus orci
              facilisis enim. Aliquam sem justo, faucibus eget gravida nec,
              dignissim sit amet tellus. Etiam consequat elementum lectus, ac
              luctus justo egestas ac. Aenean facilisis orci ut pellentesque
              ultricies. Phasellus convallis elit eget rhoncus dapibus. Donec
              orci metus, placerat eu libero auctor, luctus sollicitudin turpis.
              Aenean varius tempus rhoncus. Aliquam turpis elit, luctus vitae
              justo eget, scelerisque varius massa. Nulla quis enim dolor.
              Maecenas porta, augue a condimentum rhoncus, erat purus varius
              nibh, in porta ligula tortor nec massa. Nullam vulputate maximus
              convallis.
            </p>
            <div className="level1">
              <div className="level2">
                <div className="level3">
                  <p className="p-1">
                    Quisque suscipit eget mi eu aliquam. Nunc odio arcu,
                    faucibus in suscipit vitae, pellentesque iaculis purus.
                    Vestibulum lacinia, tellus in posuere eleifend, nulla nisl
                    cursus tortor, ac molestie mauris leo quis libero. Integer
                    pulvinar mauris vel efficitur vehicula. Etiam elementum,
                    neque ac egestas luctus, enim dui imperdiet nulla, in
                    consequat libero lectus vitae est. Vestibulum scelerisque
                    ultrices rutrum. Proin nisi sapien, congue non mattis non,
                    cursus in magna. Donec sit amet vestibulum turpis. Mauris at
                    ex eros. Phasellus dictum aliquam ante, et faucibus orci.
                    Donec nibh neque, fermentum lobortis molestie eu, faucibus
                    eu magna. Aliquam hendrerit sem quis odio lobortis
                    tristique. Vivamus a magna vitae leo ultricies porttitor non
                    sit amet libero. Vivamus faucibus sapien ligula, nec tempus
                    velit vehicula sit amet.urna eget nulla lacinia, ac cursus
                    nibh finibus. Donec in vestibulum nunc, sed faucibus nulla.
                    Nunc rutrum congue varius. Nam rhoncus, quam ac vestibulum
                    aliquam, massa nisl tincidunt nibh, placerat interdum lacus
                    lacus iaculis nisl. Vivamus eu purus augue. Ut blandit
                    mattis neque, sit amet bibendum quam laoreet sagittis.
                    Nullam lobortis scelerisque dui sit amet aliquet. Donec
                    feugiat, sem nec egestas commodo, lorem neque condimentum
                    arcu, a sagittis lectus ipsum eget nisi. Mauris id bibendum
                    neque. Sed lacus elit, consequat sed sagittis at, congue et
                    neque. Integer a sapien mauris. Cras mauris nibh, hendrerit
                    eu orci in,
                  </p>

                  <p className="p-2">
                    mattis sollicitudin libero. Nunc ut sapien sed est aliquam
                    mollis. Morbi dui turpis, maximus eu nulla in, lobortis
                    malesuada massa. Donec at arcu sed diam sollicitudin tempor
                    eget maximus est. Nullam convallis malesuada vehicula.
                    Aenean ornare augue nisl, et placerat dolor tempus quis.
                    Nulla semper et purus at porttitor. Aliquam bibendum
                    malesuada enim, quis vulputate nisi. Mauris nec ultrices mi,
                    non rutrum sapien. Phasellus ornare, odio non egestas
                    sodales, sapien nisl faucibus quam, a dictum lorem magna
                    vitae nibh. Nam ac nisl a erat consectetur malesuada.
                    Suspendisse maximus, lorem eu suscipit pellentesque, orci
                    metus mattis nunc, vitae venenatis lectus orci facilisis
                    enim. Aliquam sem justo, faucibus eget gravida nec,
                    dignissim sit amet tellus. Etiam consequat elementum lectus,
                    ac luctus justo egestas ac. Aenean facilisis orci ut
                    pellentesque ultricies. Phasellus convallis elit eget
                    rhoncus dapibus. Donec orci metus, placerat eu libero
                    auctor, luctus sollicitudin turpis. Aenean varius tempus
                    rhoncus. Aliquam turpis elit, luctus vitae justo eget,
                    scelerisque varius massa. Nulla quis enim dolor. Maecenas
                    porta, augue a condimentum rhoncus, erat purus varius nibh,
                    in porta ligula tortor nec massa. Nullam vulputate maximus
                    convallis. Quisque suscipit eget mi eu aliquam. Nunc odio
                    arcu, faucibus in suscipit vitae, pellentesque iaculis
                    purus. Vestibulum lacinia, tellus in posuere eleifend, nulla
                    nisl cursus tortor, ac molestie mauris leo quis libero.
                    Integer pulvinar mauris vel efficitur vehicula. Etiam
                    elementum, neque ac egestas luctus, enim dui imperdiet
                    nulla, in consequat libero lectus vitae est. Vestibulum
                    scelerisque ultrices rutrum. Proin nisi sapien, congue non
                    mattis non, cursus in magna. Donec sit amet vestibulum
                    turpis. Mauris at ex eros. Phasellus dictum aliquam ante, et
                    faucibus orci. Donec nibh neque, fermentum lobortis molestie
                    eu, faucibus eu magna. Aliquam hendrerit sem quis odio
                    lobortis tristique. Vivamus a magna vitae leo ultricies
                    porttitor non sit amet libero. Vivamus faucibus sapien
                    ligula, nec tempus velit vehicula sit amet.
                  </p>
                </div>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              maximus fermentum libero, sit amet ornare risus varius non. Etiam
              luctus urna eget nulla lacinia, ac cursus nibh finibus. Donec in
              vestibulum nunc, sed faucibus nulla. Nunc rutrum congue varius.
              Nam rhoncus, quam ac vestibulum aliquam, massa nisl tincidunt
              nibh, placerat interdum lacus lacus iaculis nisl. Vivamus eu purus
              augue. Ut blandit mattis neque, sit amet bibendum quam laoreet
              sagittis. Nullam lobortis scelerisque dui sit amet aliquet. Donec
              feugiat, sem nec egestas commodo, lorem neque condimentum arcu, a
              sagittis lectus ipsum eget nisi. Mauris id bibendum neque. Sed
              lacus elit, consequat sed sagittis at, congue et neque. Integer a
              sapien mauris. Cras mauris nibh, hendrerit eu orci in, mattis
              sollicitudin libero. Nunc ut sapien sed est aliquam mollis. Morbi
              dui turpis, maximus eu nulla in, lobortis malesuada massa. Donec
              at arcu sed diam sollicitudin tempor eget maximus est. Nullam
              convallis malesuada vehicula. Aenean ornare augue nisl, et
              placerat dolor tempus quis. Nulla semper et purus at porttitor.
              Aliquam bibendum malesuada enim, quis vulputate nisi. Ma
            </p>
            <p>
              uris nec ultrices mi, non rutrum sapien. Phasellus ornare, odio
              non egestas sodales, sapien nisl faucibus quam, a dictum lorem
              magna vitae nibh. Nam ac nisl a erat consectetur malesuada.
              Suspendisse maximus, lorem eu suscipit pellentesque, orci metus
              mattis nunc, vitae venenatis lectus orci facilisis enim. Aliquam
              sem justo, faucibus eget gravida nec, dignissim sit amet tellus.
              Etiam consequat elementum lectus, ac luctus justo egestas ac.
              Aenean facilisis orci ut pellentesque ultricies. Phasellus
              convallis elit eget rhoncus dapibus. Donec orci metus, placerat eu
              libero auctor, luctus sollicitudin turpis. Aenean varius tempus
              rhoncus. Aliquam turpis elit, luctus vitae justo eget, scelerisque
              varius massa. Nulla quis enim dolor. Maecenas porta, augue a
              condimentum rhoncus, erat purus varius nibh, in porta ligula
              tortor nec massa. Nullam vulputate maximus convallis. Quisque
              suscipit eget mi eu aliquam. Nunc odio arcu, faucibus in suscipit
              vitae, pellentesque iaculis purus. Vestibulum lacinia, tellus in
              posuere eleifend, nulla nisl cursus tortor, ac molestie mauris leo
              quis libero. Integer pulvinar mauris vel efficitur vehicula. Etiam
              elementum, neque ac egestas luctus, enim dui imperdiet nulla, in
              consequat libero lectus vitae est. Vestibulum scelerisque ultrices
              rutrum. Proin nisi sapien, congue non mattis non, cursus in magna.
              Donec sit amet vestibulum turpis. Mauris at ex eros. Phasellus
              dictum aliquam ante, et faucibus orci. Donec nibh neque, fermentum
              lobortis molestie eu, faucibus eu magna. Aliquam hendrerit sem
              quis odio lobortis tristique. Vivamus a magna vitae leo ultricies
              porttitor non sit amet libero. Vivamus faucibus sapien ligula, nec
              tempus velit vehicula sit amet.urna eget nulla lacinia, ac cursus
              nibh finibus. Donec in vestibulum nunc, sed faucibus nulla. Nunc
              rutrum congue varius. Nam rhoncus, quam ac vestibulum aliquam,
              massa nisl tincidunt nibh, placerat interdum lacus lacus iaculis
              nisl. Vivamus eu purus augue. Ut blandit mattis neque, sit amet
              bibendum quam laoreet sagittis. Nullam lobortis scelerisque dui
              sit amet aliquet. Donec feugiat, sem nec egestas commodo, lorem
              neque condimentum arcu, a sagittis lectus ipsum eget nisi. Mauris
              id bibendum neque. Sed lacus elit, consequat sed sagittis at,
              congue et neque. Integer a sapien mauris. Cras mauris nibh,
              hendrerit eu orci in, mattis sollicit
            </p>
            <p>
              udin libero. Nunc ut sapien sed est aliquam mollis. Morbi dui
              turpis, maximus eu nulla in, lobortis malesuada massa. Donec at
              arcu sed diam sollicitudin tempor eget maximus est. Nullam
              convallis malesuada vehicula. Aenean ornare augue nisl, et
              placerat dolor tempus quis. Nulla semper et purus at porttitor.
              Aliquam bibendum malesuada enim, quis vulputate nisi. Mauris nec
              ultrices mi, non rutrum sapien. Phasellus ornare, odio non egestas
              sodales, sapien nisl faucibus quam, a dictum lorem magna vitae
              nibh. Nam ac nisl a erat consectetur malesuada. Suspendisse
              maximus, lorem eu suscipit pellentesque, orci metus mattis nunc,
              vitae venenatis lectus orci facilisis enim. Aliquam sem justo,
              faucibus eget gravida nec, dignissim sit amet tellus. Etiam
              consequat elementum lectus, ac luctus justo egestas ac. Aenean
              facilisis orci ut pellentesque ultricies. Phasellus convallis elit
              eget rhoncus dapibus. Donec orci metus, placerat eu libero auctor,
              luctus sollicitudin turpis. Aenean varius tempus rhoncus. Aliquam
              turpis elit, luctus vitae justo eget, scelerisque varius massa.
              Nulla quis enim dolor. Maecenas porta, augue a condimentum
              rhoncus, erat purus varius nibh, in porta ligula tortor nec massa.
              Nullam vulputate maximus convallis. Quisque suscipit eget mi eu
              aliquam. Nunc odio arcu, faucibus in suscipit vitae, pellentesque
              iaculis purus. Vestibulum lacinia, tellus in posuere eleifend,
              nulla nisl cursus tortor, ac molestie mauris leo quis libero.
              Integer pulvinar mauris vel efficitur vehicula. Etiam elementum,
              neque ac egestas luctus, enim dui imperdiet nulla, in consequat
              libero lectus vitae est. Vestibulum scelerisque ultrices rutrum.
              Proin nisi sapien, congue non mattis non, cursus in magna. Donec
              sit amet vestibulum turpis. Mauris at ex eros. Phasellus dictum
              aliquam ante, et faucibus orci. Donec nibh neque, fermentum
              lobortis molestie eu, faucibus eu magna. Aliquam hendrerit sem
              quis odio lobortis tristique. Vivamus a magna vitae leo ultricies
              porttitor non sit amet libero. Vivamus faucibus sapien ligula, nec
              tempus velit vehicula sit amet.
            </p>

            <div className="level1">
              <div className="level2">
                <div className="level3"></div>
              </div>
            </div>
          </section>
          <section id="sidebar">
            <h3>Sidebar</h3>
            <div
              style={{
                height: "100%",
                backgroundColor: "#eee",
                borderRadius: "10px",
              }}
            ></div>
          </section>
        </div>
      </div>
    </>
  );
}

export default GrowMePage;
