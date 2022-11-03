import{_ as s,c as e,o as a,d as t}from"./app.ee1ebac9.js";const A=JSON.parse('{"title":"Working with Set<T>","description":"","frontmatter":{},"headers":[{"level":2,"title":"Converting arrays to sets","slug":"converting-arrays-to-sets","link":"#converting-arrays-to-sets","children":[]},{"level":2,"title":"Converting sets to arrays","slug":"converting-sets-to-arrays","link":"#converting-sets-to-arrays","children":[]}],"relativePath":"guide/working-with-sets.md","lastUpdated":1667491179000}'),n={name:"guide/working-with-sets.md"},o=t(`<h1 id="working-with-set-t" tabindex="-1">Working with <code>Set&lt;T&gt;</code> <a class="header-anchor" href="#working-with-set-t" aria-hidden="true">#</a></h1><p>With the intention of being idiomatic, ts-dax&#39;s API returns a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set" target="_blank" rel="noreferrer"><code>Set&lt;T&gt;</code></a> instead of an <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" rel="noreferrer"><code>Array&lt;T&gt;</code></a> where possible (and suitable).</p><h2 id="converting-arrays-to-sets" tabindex="-1">Converting arrays to sets <a class="header-anchor" href="#converting-arrays-to-sets" aria-hidden="true">#</a></h2><p>Arrays can be easily converted to sets by supplying them to the <code>Set</code> constructor:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">] </span><span style="color:#676E95;">// Your array object</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> set </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Set</span><span style="color:#A6ACCD;">(arr)</span></span>
<span class="line"></span></code></pre></div><h2 id="converting-sets-to-arrays" tabindex="-1">Converting sets to arrays <a class="header-anchor" href="#converting-sets-to-arrays" aria-hidden="true">#</a></h2><p>Using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from" target="_blank" rel="noreferrer"><code>Array.from()</code></a>, you can easily create a <code>Set&lt;T&gt;</code> from a provided <code>Array&lt;T&gt;</code>.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> set </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Your set object (possibly generated by ts-dax)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Array</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">from</span><span style="color:#A6ACCD;">(set)</span></span>
<span class="line"></span></code></pre></div>`,8),r=[o];function l(c,p,i,d,y,g){return a(),e("div",null,r)}const C=s(n,[["render",l]]);export{A as __pageData,C as default};