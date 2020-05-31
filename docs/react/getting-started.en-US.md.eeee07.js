(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{3252:function(a,b){a.exports={content:["article",{},["h2","First Example"],["p","Here is a simple codesandbox example to show the usage of Ant Design React."],["iframe",{src:"https://codesandbox.io/embed/antd-reproduction-template-6e93z?autoresize=1&fontsize=14&hidenavigation=1&theme=dark",style:"width: 100%; height: 500px; border: 0px; border-radius: 4px; overflow: hidden;",title:"antd reproduction template",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}],["h3","1. Create one codesandbox"],["p","Visit ",["a",{title:null,href:"http://u.ant.design/codesandbox-repro"},"http://u.ant.design/codesandbox-repro"]," to create a codesandbox. Don't forget to press the save button."],["h3","2. Using antd component"],["p","Replace the content of ",["code","index.js"]," with the following code. As you can see, there is no difference between antd's components and typical React components."],["p","If you already set up by ",["a",{title:null,href:"/docs/react/use-with-create-react-app#Install-and-Initialization"},"Install and Initialization"],' section of "Use in create-react-app", Please replace the content of /src/index.js'],["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-dom'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'antd/dist/antd.css'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./index.css'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>date<span class="token punctuation">,</span> setDate<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> handleChange <span class="token operator">=</span> value <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">\`Selected Date: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value <span class="token operator">?</span> value<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'YYYY-MM-DD'</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token string">'None'</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setDate</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token number">400</span><span class="token punctuation">,</span> margin<span class="token punctuation">:</span> <span class="token string">'100px auto'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        Selected Date<span class="token punctuation">:</span> <span class="token punctuation">{</span>date <span class="token operator">?</span> date<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'YYYY-MM-DD'</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token string">'None'</span><span class="token punctuation">}</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`import React, { useState } from 'react';
import { render } from 'react-dom';
import { DatePicker, message } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

const App = () => {
  const [date, setDate] = useState(null);
  const handleChange = value => {
    message.info(\`Selected Date: \${value ? value.format('YYYY-MM-DD') : 'None'}\`);
    setDate(value);
  };
  return (
    <div style={{ width: 400, margin: '100px auto' }}>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));`]],["h3","3. Explore more components"],["p","You can look up components in the side menu of the Components page like the ",["a",{title:null,href:"/components/alert"},"Alert"]," component. Plenty of examples are provided in the component pages and API documentation."],["p",'Click the "Open in Editor" icon in the first example to open an editor with source code to use out-of-the-box. Now you can import the ',["code","Alert"]," component into the codesandbox:"],["pre",{lang:"diff",highlighted:`<span class="token deleted">- import { DatePicker, message } from 'antd';</span>
<span class="token inserted">+ import { DatePicker, message, Alert } from 'antd';</span>`},["code",`- import { DatePicker, message } from 'antd';
+ import { DatePicker, message, Alert } from 'antd';`]],["p","Add the following jsx into the ",["code","render"]," function."],["pre",{lang:"diff",highlighted:`  &lt;DatePicker onChange={value => this.handleChange(value)} />
  &lt;div style={{ marginTop: 20 }}>
<span class="token deleted">-   Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}</span>
<span class="token inserted">+   &lt;Alert message="Selected Date" description={date ? date.format('YYYY-MM-DD') : 'None'} /></span>
  &lt;/div>`},["code",`  <DatePicker onChange={value => this.handleChange(value)} />
  <div style={{ marginTop: 20 }}>
-   Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
+   <Alert message="Selected Date" description={date ? date.format('YYYY-MM-DD') : 'None'} />
  </div>`]],["p","Now you can see the result in the preview section."],["p",["img",{width:"420",src:"https://gw.alipayobjects.com/zos/antfincdn/JrXptUm1Nz/6b50edc4-3a3c-4b2a-843e-f9f0af2c4667.png",alt:"codesandbox screenshot"}]],["p","OK! Now you know how to use antd components in a clear way. You are welcome to explore more components in the codesandbox. We also strongly recommend using codesandbox to provide a reproducible demo when reporting a bug."],["h3","4. Next Step"],["p","In the real world you will need a development workflow consisting of ",["code","compile/build/deploy/lint/debug"],". You can find and read articles on the subject or try other scaffolds provided below:"],["ul",["li",["p",["a",{title:null,href:"http://pro.ant.design/"},"Ant Design Pro"]]],["li",["p",["a",{title:null,href:"https://github.com/zuiidea/antd-admin"},"antd-admin"]]],["li",["p",["a",{title:null,href:"https://github.com/d2-projects/d2-admin"},"d2-admin"]]],["li",["p","more scaffolds at ",["a",{title:null,href:"http://scaffold.ant.design/"},"Scaffold Market"]]]],["h2","Import on Demand"],["p",["code","antd"]," supports tree shaking of ES modules, so using ",["code","import { Button } from 'antd';"]," would drop js code you didn't use."],["p","If you see logs like in the screenshot below, you might still be using ",["code","webpack@1.x"]," or have a wrong webpack config which can't support tree shaking."],["pre",{lang:null,highlighted:'You are using a whole package of antd<span class="token punctuation">,</span> please use https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>npmjs<span class="token punctuation">.</span>com<span class="token operator">/</span>package<span class="token operator">/</span>babel<span class="token operator">-</span>plugin<span class="token operator">-</span>import <span class="token keyword">to</span> reduce app bundle size<span class="token punctuation">.</span> Please upgrade webpack <span class="token operator">or</span> check the config<span class="token punctuation">.</span>'},["code","You are using a whole package of antd, please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size. Please upgrade webpack or check the config."]],["blockquote",["p",["img",{title:null,src:"https://zos.alipayobjects.com/rmsportal/GHIRszVcmjccgZRakJDQ.png",alt:"console warning"}]]],["h2","Replace momentjs to Day.js"],["p","You can use ",["a",{title:null,href:"https://github.com/ant-design/antd-dayjs-webpack-plugin"},"antd-dayjs-webpack-plugin"]," plugin to replace momentjs to Day.js to reduce bundle size dramatically. You need to update your webpack config file like this:"],["pre",{lang:"js",highlighted:`<span class="token comment" spellcheck="true">// webpack-config.js</span>
<span class="token keyword">import</span> AntdDayjsWebpackPlugin <span class="token keyword">from</span> <span class="token string">'antd-dayjs-webpack-plugin'</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment" spellcheck="true">// ...</span>
  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">AntdDayjsWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>`},["code",`// webpack-config.js
import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';

module.exports = {
  // ...
  plugins: [new AntdDayjsWebpackPlugin()],
};`]],["h2","Customized Work Flow"],["p","If you want to customize your work flow, we recommend using ",["a",{title:null,href:"http://webpack.github.io/"},"webpack"]," to build and debug code. You can try out plents of ",["a",{title:null,href:"https://github.com/enaqx/awesome-react#react-tools"},"boilerplates"]," available in the React ecosystem."],["p","There are some ",["a",{title:null,href:"http://scaffold.ant.design/"},"scaffolds"]," which have already integrated antd, so you can try and start with one of these and even contribute."]],meta:{order:2,title:"Getting Started",filename:"docs/react/getting-started.en-US.md"},description:["section",["p","Ant Design React is dedicated to providing a ",["strong","good development experience"]," for programmers. Make sure that you have installed ",["a",{title:null,href:"https://nodejs.org/"},"Node.js"],"(> 8.0.0) correctly."],["p","If you try in local environment, Please refer to ",["a",{title:null,href:"/docs/react/use-with-create-react-app#Install-and-Initialization"},"Install and Initialization"],' section of "Use in create-react-app".'],["blockquote",["p","Before delving into Ant Design React, a good knowledge base of ",["a",{title:null,href:"https://reactjs.org"},"React"]," and ",["a",{title:null,href:"http://babeljs.io/docs/learn-es2015/"},"JavaScript ES2015"]," is needed."]]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#First-Example",title:"First Example"},"First Example"]],["li",["a",{className:"bisheng-toc-h2",href:"#Import-on-Demand",title:"Import on Demand"},"Import on Demand"]],["li",["a",{className:"bisheng-toc-h2",href:"#Replace-momentjs-to-Day.js",title:"Replace momentjs to Day.js"},"Replace momentjs to Day.js"]],["li",["a",{className:"bisheng-toc-h2",href:"#Customized-Work-Flow",title:"Customized Work Flow"},"Customized Work Flow"]]]}}}]);