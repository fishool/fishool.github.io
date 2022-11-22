import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as t,a as e,b as i,f as s,d as a,r}from"./app.5f15ca94.js";const u={},o=e("h1",{id:"第2节-索引创建规范约束以及索引数据模型笔记",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#第2节-索引创建规范约束以及索引数据模型笔记","aria-hidden":"true"},"#"),i(" 第2节-索引创建规范约束以及索引数据模型笔记")],-1),c=e("h2",{id:"官网文档",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#官网文档","aria-hidden":"true"},"#"),i(" 官网文档")],-1),v={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/index-modules.html",target:"_blank",rel:"noopener noreferrer"},m=e("br",null,null,-1),h={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/index-modules.html",target:"_blank",rel:"noopener noreferrer"},b=a(`<h2 id="索引创建规范约束" tabindex="-1"><a class="header-anchor" href="#索引创建规范约束" aria-hidden="true">#</a> 索引创建规范约束</h2><p>ES 创建索引有的场景需要提前创建好, 有的场景可以可以动态创建; 每个索引可以指定一个/多个别名,便于索引重建切换;<br> 索引在创建时可以设置一些参数,有的是固定设置,后期不可以修改, 有些是可以修改的;有些参数设置后, 只对新的文档生效;</p><h3 id="查询所有索引信息" tabindex="-1"><a class="header-anchor" href="#查询所有索引信息" aria-hidden="true">#</a> 查询所有索引信息</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET _cat/indices?v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="索引命名规范" tabindex="-1"><a class="header-anchor" href="#索引命名规范" aria-hidden="true">#</a> 索引命名规范</h3><p>索引命名规范: index-name-000001; log-name-2021-11-01; 使用 - 分割, 以便于后期索引的管理和查询;</p><h3 id="动态创建索引" tabindex="-1"><a class="header-anchor" href="#动态创建索引" aria-hidden="true">#</a> 动态创建索引</h3><p>索引名称: foolish-test-0001</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001

POST /foolish-test-0001/_doc
{
  &quot;name&quot;: &quot;foolish&quot;,
  &quot;age&quot;: 18,
  &quot;create_time&quot;: &quot;2021-11-01&quot;,
   &quot;teams&quot;: [
     &quot;team1&quot;,
     &quot;team2&quot;,
      &quot;team3&quot;
    ]
}
# 查看索引信息
GET /foolish-test-0001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态创建索引" tabindex="-1"><a class="header-anchor" href="#静态创建索引" aria-hidden="true">#</a> 静态创建索引</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;settings&quot;: {
    &quot;number_of_shards&quot;: 1,
    &quot;number_of_replicas&quot;: 1
  }
}
# 查看索引信息
GET /foolish-test-0001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="索引别名绑定" tabindex="-1"><a class="header-anchor" href="#索引别名绑定" aria-hidden="true">#</a> 索引别名绑定</h3><p>任何索引都有默认的别名, 为索引名称;</p><ul><li>索引别名与索引名称绑定是多对多的关系;</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 索引创建完成之后绑定别名
DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;settings&quot;: {
    &quot;number_of_shards&quot;: 1,
    &quot;number_of_replicas&quot;: 1
  }
}
PUT /foolish-test-0001/_alias/foolish_test_alias_0001

# 静态创建索引时绑定别名
DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;settings&quot;: {
    &quot;number_of_shards&quot;: 1,
    &quot;number_of_replicas&quot;: 1
  },
  &quot;aliases&quot;: {
    &quot;foolish_test_alias_0001&quot;: {}
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="滚动索引创建" tabindex="-1"><a class="header-anchor" href="#滚动索引创建" aria-hidden="true">#</a> 滚动索引创建</h3><ul><li>滚动索引创建, 通过别名绑定, 通过别名查询, 通过别名写入;</li><li>完全自动化, 需要绑定到ILM机制</li></ul><ol><li>创建索引, 指定索引别名</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-000001
PUT /foolish-test-000001
{
  &quot;settings&quot;: {
    &quot;number_of_shards&quot;: 1,
    &quot;number_of_replicas&quot;: 1
  },
  &quot;aliases&quot;: {
    &quot;foolish-test-alias&quot;: {}
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>设定索引滚动策略</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /foolish-test-alias/_rollover
{
  &quot;conditions&quot;: {
    &quot;max_age&quot;: &quot;7d&quot;,
    &quot;max_size&quot;: &quot;50gb&quot;,
    &quot;max_docs&quot;: 5
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>写入数据并触发滚动规则</li></ol><ul><li>填充数据, 观察索引创建是否自动滚动(自动滚动有一定的延迟), 可以手动触发;</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /foolish-test-alias/_doc?refresh
{
  &quot;name&quot;: &quot;foolish&quot;,
  &quot;age&quot;: 18,
  &quot;create_time&quot;: &quot;2021-11-01&quot;,
   &quot;teams&quot;: [
     &quot;team1&quot;,
     &quot;team2&quot;,
      &quot;team3&quot;
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>手动触发滚动创建索引条件</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /foolish-test-alias/_rollover
{
  &quot;conditions&quot;: {
    &quot;max_age&quot;: &quot;7d&quot;,
    &quot;max_size&quot;: &quot;50gb&quot;,
    &quot;max_docs&quot;: 5
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>强制滚动创建索引-指定索引</li></ol><ul><li>强制滚动创建下一个索引, 指定索引名称 , 跳过触发条件;</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /foolish-test-alias/_rollover/foolish-test-000005
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="滚动创建关键设置" tabindex="-1"><a class="header-anchor" href="#滚动创建关键设置" aria-hidden="true">#</a> 滚动创建关键设置</h3><ul><li>目标索引创建规则;</li><li>字母必须小写;</li><li>不能带有特殊符号等;</li><li>不能超过255个字符;</li></ul><h3 id="滚动索引触发条件" tabindex="-1"><a class="header-anchor" href="#滚动索引触发条件" aria-hidden="true">#</a> 滚动索引触发条件</h3><ul><li>触发条件是非精准型, 具有一定的延迟, 满足任意一个条件即可触发;</li><li>conditions 触发条件;</li><li>max_docs 最大文档数;</li><li>max_age 日期间隔;</li><li>max_size 索引大小;</li></ul><h3 id="滚动创建参数-dry-run" tabindex="-1"><a class="header-anchor" href="#滚动创建参数-dry-run" aria-hidden="true">#</a> 滚动创建参数 dry_run</h3><ul><li>dry_run 参数, 用于测试滚动创建规则是否生效;</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /foolish-test-alias/_rollover?dry_run
{
  &quot;conditions&quot;: {
    &quot;max_age&quot;: &quot;7d&quot;,
    &quot;max_size&quot;: &quot;50gb&quot;,
    &quot;max_docs&quot;: 5
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="索引创建必备设置" tabindex="-1"><a class="header-anchor" href="#索引创建必备设置" aria-hidden="true">#</a> 索引创建必备设置</h2>`,37),_={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/index-modules.html",target:"_blank",rel:"noopener noreferrer"},q=a(`<ul><li>number_of_shards 分片数;</li><li>number_of_replicas 副本数;</li><li>refresh_interval 刷新间隔;</li></ul><h3 id="禁用集群动态创建机制" tabindex="-1"><a class="header-anchor" href="#禁用集群动态创建机制" aria-hidden="true">#</a> 禁用集群动态创建机制</h3><p>在es集群中, 动态创建时可以被禁用的, 在特别严格的业务数据集群上特别重要.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 容许部分索引可自动创建
PUT _cluster/settings
{
  &quot;persistent&quot;: {
    &quot;action.auto_create_index&quot;: &quot;logstash-*,fishool-*&quot;
  }
}
# 禁用所有索引自动创建
PUT _cluster/settings
{
  &quot;persistent&quot;: {
    &quot;action.auto_create_index&quot;: &quot;false&quot;
  }
}

# 启动所有索引自动创建
PUT _cluster/settings
{
  &quot;persistent&quot;: {
    &quot;action.auto_create_index&quot;: &quot;true&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除索引" tabindex="-1"><a class="header-anchor" href="#删除索引" aria-hidden="true">#</a> 删除索引</h3><ul><li>删除索引, 通过索引名称删除;</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-000001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="索引文档模型" tabindex="-1"><a class="header-anchor" href="#索引文档模型" aria-hidden="true">#</a> 索引文档模型</h2>`,8),x={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-types.html",target:"_blank",rel:"noopener noreferrer"},f=a('<p>ES提供的文档模型常用的是平铺型与对象型, 另外的属于特殊应用领域. 应用场景较少.</p><h2 id="源码解读" tabindex="-1"><a class="header-anchor" href="#源码解读" aria-hidden="true">#</a> 源码解读</h2><ul><li>bootstrap 代码启动入口</li><li>rest rest接口请求入口</li><li>action rest请求命令转为action命令</li><li>execute 具体执行层 <img src="https://81.71.83.25/bucket/20221114152956.png" alt="执行顺序" loading="lazy"></li></ul><h3 id="索引创建源码" tabindex="-1"><a class="header-anchor" href="#索引创建源码" aria-hidden="true">#</a> 索引创建源码</h3><p>MetadataCreateIndexService.java <img src="https://81.71.83.25/bucket/20221114130631.png" alt="创建过程" loading="lazy"></p>',5);function p(E,T){const n=r("ExternalLinkIcon");return d(),t("div",null,[o,c,e("p",null,[e("a",v,[i("官网Index描述"),s(n)]),m,e("a",h,[i("滚动创建索引"),s(n)])]),b,e("p",null,[e("a",_,[i("索引创建必备设置"),s(n)])]),q,e("p",null,[e("a",x,[i("索引文档Mapping"),s(n)]),e("a",g,[i("索引文档类型"),s(n)])]),f])}const k=l(u,[["render",p],["__file","第2节-索引创建规范约束以及索引数据模型笔记.html.vue"]]);export{k as default};
