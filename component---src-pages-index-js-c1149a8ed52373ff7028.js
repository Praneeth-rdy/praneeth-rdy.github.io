(self.webpackChunkpraneeth_rdy_github_io=self.webpackChunkpraneeth_rdy_github_io||[]).push([[678],{1046:function(e,t,a){"use strict";a.d(t,{w_:function(){return s}});var n=a(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=n.createContext&&n.createContext(r),l=function(){return(l=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},o=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};function i(e){return e&&e.map((function(e,t){return n.createElement(e.tag,l({key:t},e.attr),i(e.child))}))}function s(e){return function(t){return n.createElement(m,l({attr:l({},e.attr)},t),i(e.child))}}function m(e){var t=function(t){var a,r=e.attr,c=e.size,i=e.title,s=o(e,["attr","size","title"]),m=c||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,s,{className:a,style:l(l({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==c?n.createElement(c.Consumer,null,(function(e){return t(e)})):t(r)}},6076:function(e,t,a){"use strict";var n=a(7294);t.Z=function(e){var t=e.color,a=e.margin;return""===a&&(a="30px"),n.createElement("hr",{style:{backgroundColor:t,height:2,margin:a+" 0"}})}},3008:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return y}});var n=a(7294),r=a(5444),c=a(2729),l=a(6179),o=a(6076),i=a(9285),s=a(3201);function m(e){var t=e.darkModeImage,a=e.lightModeImage,r=e.data,c=e.darkMode,l=r.site.siteMetadata.social,o=r.site.siteMetadata.authorFullName;return console.log(l),n.createElement("section",{className:"page-head intro-section"},n.createElement("div",{className:"intro-text"},n.createElement("div",null,n.createElement("h3",null,"Hello, I'm"),n.createElement("h1",null,o),n.createElement("h3",{className:"designation"},"Passionate Full Stack Developer"),n.createElement("a",{className:"link button grow",href:"Praneeth-Reddy-Kolanu-CV.pdf",download:"Praneeth-Reddy-Kolanu-CV.pdf"},"Download Resume"),n.createElement("div",{className:"icons-container"},n.createElement("a",{href:l.github,target:"_blank",className:"link",rel:"noreferrer"},n.createElement(s.hJX,{className:"icon",target:"_blank"})),n.createElement("a",{href:l.linkedin,target:"_blank",className:"link",rel:"noreferrer"},n.createElement(s.ltd,{className:"icon",target:"_blank"})),n.createElement("a",{href:l.facebook,target:"_blank",className:"link",rel:"noreferrer"},n.createElement(s.Am9,{className:"icon",target:"_blank"})),n.createElement("a",{href:"mailto:"+l.email,target:"_blank",className:"link",rel:"noreferrer"},n.createElement(s.SRX,{className:"icon"}))))),n.createElement(i.G,{className:"intro-image",image:c?t:a,style:{width:"400px"}}))}var u=function(e){return n.createElement(r.StaticQuery,{query:"3490982964",render:function(t){return n.createElement(m,Object.assign({props:!0,data:t},e))}})};var d=function(e){var t=e.image;return n.createElement("section",{className:"home-section post-content-body"},n.createElement("h2",{class:"section-heading"},"About"),n.createElement("div",{className:"about-content row"},n.createElement("figure",{className:"about-image"},n.createElement(i.G,{image:t,style:{borderRadius:"8px"}})),n.createElement("div",{className:"about-description"},n.createElement("p",null,"Hi, I'm Praneeth Reddy Kolanu, a hybrid version of Software, Business and Management. I love solving societal problems through technology and building software applications which have the potential to impact people's lives. I am an active open-source contributor. I participate in all the open source programs which come on my way. Gradually, becoming obsessed with Data Structures, Algorithms and Problem-Solving. Ready to face new challenges of life."))))};function g(e){var t=e.data.allMarkdownRemark.edges;return n.createElement("section",{className:"home-section post-content-body"},n.createElement("h2",{className:"section-heading"},"Skillset"),n.createElement("div",{className:"skill-cards-container"},t.map((function(e){var t=e.node;return n.createElement("div",{className:"skill-card",style:{backgroundColor:t.frontmatter.color}},t.frontmatter.title)}))))}var p=function(e){return n.createElement(r.StaticQuery,{query:"1710522643",render:function(t){return n.createElement(g,Object.assign({props:!0,data:t},e))}})};function h(e){var t=e.data.othersJson.experience,a=(0,n.useState)(t[0]),r=a[0],c=a[1];function l(e){var a=t.find((function(t){return t.org===e}));c(a)}return n.createElement("section",{className:"home-section post-content-body"},n.createElement("h2",{class:"section-heading"},n.createElement("span",null,"Experience")),n.createElement("div",{className:"experience-container row"},n.createElement("div",{className:"experience-nav-container"},t.map((function(e){return e.org===r.org?n.createElement("button",{className:"experience-nav-item active",onClick:function(){return l(e.org)}},e.org):n.createElement("button",{className:"experience-nav-item",onClick:function(){return l(e.org)}},e.org)}))),n.createElement("div",{className:"experience-body-container"},r.posts.map((function(e){return n.createElement("div",{className:"experience-item-container"},n.createElement("h2",{className:"experience-heading"},e.title),n.createElement("h3",{className:"experience-timeline"},e.start," - ",e.end),n.createElement("ul",{className:"experience-description-list"},e.description.map((function(e){return n.createElement("li",{className:"experience-description-list-item"},e)}))))})))))}var f=function(e){return n.createElement(r.StaticQuery,{query:"2858537197",render:function(t){return n.createElement(h,Object.assign({props:!0,data:t},e))}})};function E(e){var t=e.data.allMarkdownRemark.edges;return n.createElement("section",{className:"home-section post-content-body"},n.createElement("h2",{class:"section-heading"},"Projects"),n.createElement("div",{className:"project-cards-container"},t.map((function(e){var t=e.node;return n.createElement("div",{className:"card b-shadow grow"},n.createElement("div",{className:"card-image"},n.createElement(i.G,{image:t.frontmatter.thumbnail.childImageSharp.gatsbyImageData,style:{height:"100%"}})),n.createElement("h3",{className:"heading"},t.frontmatter.title),n.createElement("div",{className:"card-description"},n.createElement("p",null,t.frontmatter.stack)))}))))}var v=function(e){return n.createElement(r.StaticQuery,{query:"3214737701",render:function(t){return n.createElement(E,Object.assign({props:!0,data:t},e))}})},b=function(e,t){var a=e.data,r=a.site.siteMetadata.navHeading,i=a.darkModeImage.childImageSharp.gatsbyImageData,s=a.lightModeImage.childImageSharp.gatsbyImageData,m=a.aboutPic.childImageSharp.gatsbyImageData;return n.createElement(c.Z,{navHeading:r,path:"/"},n.createElement(l.Z,{title:"Home",keywords:["blog","gatsby","javascript","react"]}),n.createElement(u,{darkModeImage:i,lightModeImage:s}),n.createElement(o.Z,{color:"rgba(0, 0, 0, 0.5)"}),n.createElement(d,{image:m}),n.createElement(p,null),n.createElement(v,null),n.createElement(f,null))},y=function(e){return n.createElement(r.StaticQuery,{query:"1969361042",render:function(t){return n.createElement(b,Object.assign({location:e.location,props:!0,data:t},e))}})}}}]);
//# sourceMappingURL=component---src-pages-index-js-c1149a8ed52373ff7028.js.map