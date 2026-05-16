import{i as e}from"./preload-helper-Cs4UwXAW.js";import{t}from"./jsx-runtime-C2T8EUXA.js";import{t as n}from"./compiler-runtime-Wp7RHjlj.js";var r=e((()=>{})),i,a,o,s=e((()=>{i=n(),h(),r(),a=t(),o=e=>{let t=(0,i.c)(9),{label:n,size:r,colorText:o,allCaps:s,backgroundColor:c}=e,l=r===void 0?`normal`:r,u=o===void 0?`text-secondary`:o,d=s===void 0?!1:s,f=`${l} ${u} label`,p;t[0]===c?p=t[1]:(p={background:c},t[0]=c,t[1]=p);let m;t[2]!==d||t[3]!==n?(m=d?n.toUpperCase():n,t[2]=d,t[3]=n,t[4]=m):m=t[4];let h;return t[5]!==f||t[6]!==p||t[7]!==m?(h=(0,a.jsx)(`span`,{className:f,style:p,children:m}),t[5]=f,t[6]=p,t[7]=m,t[8]=h):h=t[8],h},o.__docgenInfo={description:``,methods:[],displayName:`Label`,props:{label:{required:!0,tsType:{name:`string`},description:`Text to display`},size:{required:!1,tsType:{name:`union`,raw:`"normal" | "h1" | "h2" | "h3"`,elements:[{name:`literal`,value:`"normal"`},{name:`literal`,value:`"h1"`},{name:`literal`,value:`"h2"`},{name:`literal`,value:`"h3"`}]},description:`Label size`,defaultValue:{value:`"normal"`,computed:!1}},allCaps:{required:!1,tsType:{name:`boolean`},description:`Capitalize all letters`,defaultValue:{value:`false`,computed:!1}},colorText:{required:!1,tsType:{name:`union`,raw:`"text-primary" | "text-secondary" | "text-tertiary"`,elements:[{name:`literal`,value:`"text-primary"`},{name:`literal`,value:`"text-secondary"`},{name:`literal`,value:`"text-tertiary"`}]},description:`Font color`,defaultValue:{value:`"text-secondary"`,computed:!1}},backgroundColor:{required:!1,tsType:{name:`string`},description:`Font color`}}}})),c=e((()=>{s()})),l,u,d,f,p,m,h=e((()=>{c(),l={title:`Label`,tags:[`autodocs`],component:o,parameters:{layout:`centered`},argTypes:{size:{control:`inline-radio`}}},u={args:{label:`Basic Label`,colorText:`text-primary`}},d={args:{label:`All Caps Label`,allCaps:!0,colorText:`text-tertiary`}},f={args:{label:`Secondary Label`,colorText:`text-secondary`}},p={args:{label:`Custom Color Label`,backgroundColor:`#7d7d7d`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Basic Label",
    colorText: "text-primary"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "All Caps Label",
    allCaps: true,
    colorText: "text-tertiary"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Secondary Label",
    colorText: "text-secondary"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Custom Color Label",
    backgroundColor: "#7d7d7d"
  }
}`,...p.parameters?.docs?.source}}},m=[`Basic`,`AllCaps`,`Secondary`,`CustomColor`]}));h();export{d as AllCaps,u as Basic,p as CustomColor,f as Secondary,m as __namedExportsOrder,l as default};