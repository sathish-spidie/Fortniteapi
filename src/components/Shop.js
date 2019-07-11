import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavStyle } from "./Nav";
export const Shop = () => {
  useEffect(() => {
    fetchItems();
  }, []);
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get",
      {
        method: "post",
        headers: new Headers({
          Authorization: "068b96f1b0041646e2895a7c1a588754 ",
          "Content-Type": "application/json"
        }),
        body: "A=1&B=2"
      }
    );

    const items = (await data.json()).data;
    // console.log(items[Math.floor(Math.random() * 37)].item.name);
    setItems(items);
  };

  // console.log(items[0])
  return (
    <div>
      {items[0] ? (
        items.map(item => {
          return (
            <h1 key={item.itemId}>
              <Link style={NavStyle} to={`/shop/${item.itemId}`}>
                {item.item.name}
              </Link>
            </h1>
          );
        })
      ) : (
        <>
          {/* Converts html attr to jsx :) https://magic.reactjs.net/htmltojsx.htm */}
          <svg
            className="lds-gooeyring"
            width="80px"
            height="80px"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            style={{
              animationPlayState: "running",
              animationDelay: "0s",
              background: "none"
            }}
          >
            <defs
              style={{ animationPlayState: "running", animationDelay: "0s" }}
            >
              <filter
                id="gooey"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
                colorInterpolationFilters="sRGB"
                style={{ animationPlayState: "running", animationDelay: "0s" }}
              >
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation={4}
                  style={{
                    animationPlayState: "running",
                    animationDelay: "0s"
                  }}
                />
                <feComponentTransfer
                  result="cutoff"
                  style={{
                    animationPlayState: "running",
                    animationDelay: "0s"
                  }}
                >
                  <feFuncA
                    type="linear"
                    slope={10}
                    intercept={-5}
                    style={{
                      animationPlayState: "running",
                      animationDelay: "0s"
                    }}
                  />
                </feComponentTransfer>
              </filter>
            </defs>
            <g
              filter="url(#gooey)"
              style={{ animationPlayState: "running", animationDelay: "0s" }}
            >
              <g
                transform="translate(50 50)"
                style={{ animationPlayState: "running", animationDelay: "0s" }}
              >
                <g
                  transform="rotate(258)"
                  style={{
                    animationPlayState: "running",
                    animationDelay: "0s"
                  }}
                >
                  <circle
                    cx={25}
                    cy={0}
                    r="10.5333"
                    fill="#fcb711"
                    style={{
                      animationPlayState: "running",
                      animationDelay: "0s"
                    }}
                  >
                    <animate
                      attributeName="r"
                      keyTimes="0;0.5;1"
                      values="6;14;6"
                      dur="4s"
                      repeatCount="indefinite"
                      begin="-4s"
                      style={{
                        animationPlayState: "running",
                        animationDelay: "0s"
                      }}
                    />
                  </circle>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    keyTimes="0;1"
                    values="0;360"
                    dur="4s"
                    repeatCount="indefinite"
                    begin="0s"
                    style={{
                      animationPlayState: "running",
                      animationDelay: "0s"
                    }}
                  />
                </g>
              </g>
              <g
                transform="translate(50 50)"
                style={{ animationPlayState: "running", animationDelay: "0s" }}
              >
                <g
                  transform="rotate(276)"
                  style={{
                    animationPlayState: "running",
                    animationDelay: "0s"
                  }}
                >
                  <circle
                    cx={25}
                    cy={0}
                    r="7.6"
                    fill="#f37021"
                    style={{
                      animationPlayState: "running",
                      animationDelay: "0s"
                    }}
                  >
                    <animate
                      attributeName="r"
                      keyTimes="0;0.5;1"
                      values="6;14;6"
                      dur="2s"
                      repeatCount="indefinite"
                      begin="-3.3333333333333335s"
                      style={{
                        animationPlayState: "running",
                        animationDelay: "0s"
                      }}
                    />
                  </circle>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    keyTimes="0;1"
                    values="0;360"
                    dur="2s"
                    repeatCount="indefinite"
                    begin="-0.6666666666666666s"
                    style={{
                      animationPlayState: "running",
                      animationDelay: "0s"
                    }}
                  />
                </g>
              </g>
              <g
                transform="translate(50 50)"
                style={{ animationPlayState: "running", animationDelay: "0s" }}
              >
                <g
                  transform="rotate(54)"
                  style={{
                    animationPlayState: "running",
                    animationDelay: "0s"
                  }}
                >
                  <circle
                    cx={25}
                    cy={0}
                    r="8.4"
                    fill="#cc004c"
                    style={{
                      animationPlayState: "running",
                      animationDelay: "0s"
                    }}
                  >
                    <animate
                      attributeName="r"
                      keyTimes="0;0.5;1"
                      values="6;14;6"
                      dur="1.3333333333333333s"
                      repeatCount="indefinite"
                      begin="-2.6666666666666665s"
                      style={{
                        animationPlayState: "running",
                        animationDelay: "0s"
                      }}
                    />
                  </circle>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    keyTimes="0;1"
                    values="0;360"
                    dur="1.3333333333333333s"
                    repeatCount="indefinite"
                    begin="-1.3333333333333333s"
                    style={{
                      animationPlayState: "running",
                      animationDelay: "0s"
                    }}
                  />
                </g>
              </g>
              <g
                transform="translate(50 50)"
                style={{ animationPlayState: "running", animationDelay: "0s" }}
              >
                <g
                  transform="rotate(312)"
                  style={{
                    animationPlayState: "running",
                    animationDelay: "0s"
                  }}
                >
                  <circle
                    cx={25}
                    cy={0}
                    r="8.13333"
                    fill="#6460aa"
                    style={{
                      animationPlayState: "running",
                      animationDelay: "0s"
                    }}
                  >
                    <animate
                      attributeName="r"
                      keyTimes="0;0.5;1"
                      values="6;14;6"
                      dur="1s"
                      repeatCount="indefinite"
                      begin="-2s"
                      style={{
                        animationPlayState: "running",
                        animationDelay: "0s"
                      }}
                    />
                  </circle>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    keyTimes="0;1"
                    values="0;360"
                    dur="1s"
                    repeatCount="indefinite"
                    begin="-2s"
                    style={{
                      animationPlayState: "running",
                      animationDelay: "0s"
                    }}
                  />
                </g>
              </g>
              <g
                transform="translate(50 50)"
                style={{ animationPlayState: "running", animationDelay: "0s" }}
              >
                <g
                  transform="rotate(330)"
                  style={{
                    animationPlayState: "running",
                    animationDelay: "0s"
                  }}
                >
                  <circle
                    cx={25}
                    cy={0}
                    r={10}
                    fill="#0089d0"
                    style={{
                      animationPlayState: "running",
                      animationDelay: "0s"
                    }}
                  >
                    <animate
                      attributeName="r"
                      keyTimes="0;0.5;1"
                      values="6;14;6"
                      dur="0.8s"
                      repeatCount="indefinite"
                      begin="-1.3333333333333333s"
                      style={{
                        animationPlayState: "running",
                        animationDelay: "0s"
                      }}
                    />
                  </circle>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    keyTimes="0;1"
                    values="0;360"
                    dur="0.8s"
                    repeatCount="indefinite"
                    begin="-2.6666666666666665s"
                    style={{
                      animationPlayState: "running",
                      animationDelay: "0s"
                    }}
                  />
                </g>
              </g>
              <g
                transform="translate(50 50)"
                style={{ animationPlayState: "running", animationDelay: "0s" }}
              >
                <g
                  transform="rotate(108)"
                  style={{
                    animationPlayState: "running",
                    animationDelay: "0s"
                  }}
                >
                  <circle
                    cx={25}
                    cy={0}
                    r="10.8"
                    fill="#0db14b"
                    style={{
                      animationPlayState: "running",
                      animationDelay: "0s"
                    }}
                  >
                    <animate
                      attributeName="r"
                      keyTimes="0;0.5;1"
                      values="6;14;6"
                      dur="0.6666666666666666s"
                      repeatCount="indefinite"
                      begin="-0.6666666666666666s"
                      style={{
                        animationPlayState: "running",
                        animationDelay: "0s"
                      }}
                    />
                  </circle>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    keyTimes="0;1"
                    values="0;360"
                    dur="0.6666666666666666s"
                    repeatCount="indefinite"
                    begin="-3.3333333333333335s"
                    style={{
                      animationPlayState: "running",
                      animationDelay: "0s"
                    }}
                  />
                </g>
              </g>
            </g>
          </svg>
        </>
      )}
    </div>
  );
};

{
  /* <div class="lds-ellipsis"><div>🔸</div><div>🔹</div><div>🔶</div><div>🔷</div></div>
<div className="loading"><h4>🔸</h4><h4>🔹</h4><h4>🔶</h4><h4>🔷</h4></div> */
}
// items.map(item => {
//   return (
//     <h1 key={item.itemId}>
//       <Link style={NavStyle} to={`/shop/${item.itemId}`}>
//         {item.item.name}
//       </Link>
//     </h1>
//   );
// })
