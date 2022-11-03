import{_ as s,c as a,o as e,d as n}from"./app.ee1ebac9.js";const F=JSON.parse('{"title":"dateDiff","description":"","frontmatter":{},"headers":[{"level":2,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]},{"level":2,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]},{"level":2,"title":"Return value","slug":"return-value","link":"#return-value","children":[]},{"level":2,"title":"Examples","slug":"examples","link":"#examples","children":[]}],"relativePath":"guide/date-time/date-diff.md","lastUpdated":1667491179000}'),t={name:"guide/date-time/date-diff.md"},l=n(`<h1 id="datediff" tabindex="-1">dateDiff <a class="header-anchor" href="#datediff" aria-hidden="true">#</a></h1><blockquote><p><code>dateDiff(x: Date, y: Date, interval: Interval): number</code></p></blockquote><p>Returns the number of interval boundaries between two dates.</p><h2 id="syntax" tabindex="-1">Syntax <a class="header-anchor" href="#syntax" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki has-diff"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dateDiff</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Interval</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ts-dax</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> diff </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">dateDiff</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-01-01</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Interval</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">MINUTE)</span></span>
<span class="line"><span style="color:#676E95;">// =&gt; Number of minutes since the start of 2022</span></span>
<span class="line"></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h2><table><thead><tr><th>Param</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>x</code></td><td><a href="/guide/date-objects.html"><code>Date</code></a></td><td>The first date object.</td></tr><tr><td><code>y</code></td><td><a href="/guide/date-objects.html"><code>Date</code></a></td><td>The second date object.</td></tr><tr><td><code>interval</code></td><td><a href="/guide/misc/interval.html"><code>Interval</code></a></td><td>The interval to use when comparing dates.</td></tr></tbody></table><h2 id="return-value" tabindex="-1">Return value <a class="header-anchor" href="#return-value" aria-hidden="true">#</a></h2><p>The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number" target="_blank" rel="noreferrer"><code>number</code></a> of interval boundaries between two dates.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><ul><li>A positive result is returned if <code>y</code> is greater than <code>x</code>.</li><li>A negative result is returned if <code>x</code> is greater than <code>y</code>.</li><li>Zero is returned if <code>x</code> and <code>y</code> are equal.</li></ul></div><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h2><p>The following expression generates a <code>Set&lt;Date&gt;</code> containing dates from January 1st, 2015 to December 31st, 2021 (inclusive of both dates).</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">calendar</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ts-dax</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> dates </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">calendar</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2015-01-01</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2021-12-31</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"></span></code></pre></div>`,13),o=[l];function p(r,c,d,i,D,y){return e(),a("div",null,o)}const C=s(t,[["render",p]]);export{F as __pageData,C as default};
