import{_ as s,p as n,q as a,a1 as e}from"./framework-204010b2.js";const t={},o=e(`<h1 id="实用方法" tabindex="-1"><a class="header-anchor" href="#实用方法" aria-hidden="true">#</a> 实用方法</h1><h2 id="message" tabindex="-1"><a class="header-anchor" href="#message" aria-hidden="true">#</a> <code>Message</code></h2><p>全局消息</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/utils/message&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="message-info-text-string-通知" tabindex="-1"><a class="header-anchor" href="#message-info-text-string-通知" aria-hidden="true">#</a> <code>Message.info(text: string)</code> 通知</h4><h4 id="message-success-text-string-成功" tabindex="-1"><a class="header-anchor" href="#message-success-text-string-成功" aria-hidden="true">#</a> <code>Message.success(text: string)</code> 成功</h4><h4 id="message-warn-text-string-警告" tabindex="-1"><a class="header-anchor" href="#message-warn-text-string-警告" aria-hidden="true">#</a> <code>Message.warn(text: string)</code> 警告</h4><h4 id="message-error-text-string-错误" tabindex="-1"><a class="header-anchor" href="#message-error-text-string-错误" aria-hidden="true">#</a> <code>Message.error(text: string)</code> 错误</h4><hr><h2 id="formatters" tabindex="-1"><a class="header-anchor" href="#formatters" aria-hidden="true">#</a> <code>formatters</code></h2><p>公用的格式化集</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> formatters <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/utils/formatter&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="formatters-1" tabindex="-1"><a class="header-anchor" href="#formatters-1" aria-hidden="true">#</a> <code>formatters.</code></h4><h4 id="d1-d5-保留-1-位至-5-位小数" tabindex="-1"><a class="header-anchor" href="#d1-d5-保留-1-位至-5-位小数" aria-hidden="true">#</a> d1-d5: 保留 1 位至 5 位小数</h4><h4 id="e2-e5-保留-2-位至-5-位小数的科学计数法" tabindex="-1"><a class="header-anchor" href="#e2-e5-保留-2-位至-5-位小数的科学计数法" aria-hidden="true">#</a> e2-e5: 保留 2 位至 5 位小数的科学计数法</h4><p>...等</p><hr><h2 id="download" tabindex="-1"><a class="header-anchor" href="#download" aria-hidden="true">#</a> <code>download</code></h2><p>下载从后端传过来的文件</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> download <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/download&#39;</span>

<span class="token keyword">async</span> <span class="token function">downloadReport</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getReport</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token function">download</span><span class="token punctuation">(</span>response<span class="token punctuation">,</span> <span class="token string">&#39;123.pdf&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="ispermitted" tabindex="-1"><a class="header-anchor" href="#ispermitted" aria-hidden="true">#</a> <code>isPermitted</code></h2><p>是否有权限</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>注意，这跟后端配置的用户组权限有关，这里写死了 developer &gt; admin &gt; staff &gt; guest</p></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Role <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/api/types&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> UserModule <span class="token keyword">from</span> <span class="token string">&quot;@/store/modules/user&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">isPermitted</span><span class="token punctuation">(</span>
  allowedRoles<span class="token operator">:</span> Role<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  roles<span class="token operator">:</span> Role<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> UserModule<span class="token punctuation">.</span>roles
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> isPermitted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/utils/permission&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> UserModule <span class="token keyword">from</span> <span class="token string">&quot;@/store/modules/user&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> allowRoles <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> currentRoles <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;staff&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> accessible <span class="token operator">=</span> <span class="token function">isPermitted</span><span class="token punctuation">(</span>allowRoles<span class="token punctuation">,</span> currentRoles<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// False 因为staff&lt;admin</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),p=[o];function i(c,r){return n(),a("div",null,p)}const l=s(t,[["render",i],["__file","index.html.vue"]]);export{l as default};
