import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as u,a as e,b as i,f as s,d as l,r as o}from"./app.5f15ca94.js";const r={},a=e("h1",{id:"第8节-写入数据与删除数据如何避坑",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#第8节-写入数据与删除数据如何避坑","aria-hidden":"true"},"#"),i(" 第8节-写入数据与删除数据如何避坑")],-1),v=e("h2",{id:"官网文档",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#官网文档","aria-hidden":"true"},"#"),i(" 官网文档")],-1),c={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/index-modules.html",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-index_.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-delete-by-query.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-bulk.html",target:"_blank",rel:"noopener noreferrer"},h=e("h2",{id:"索引写入数据",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#索引写入数据","aria-hidden":"true"},"#"),i(" 索引写入数据")],-1),_=e("h3",{id:"_1-单条写入",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-单条写入","aria-hidden":"true"},"#"),i(" 1.单条写入")],-1),f={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-index_.html",target:"_blank",rel:"noopener noreferrer"},p=l(`<ul><li>PUT</li><li>POST</li><li>_create 新建数据关键字, 仅用于新增数据, 如果数据ID已存在, 则会报错</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE fishool-test-000008
PUT fishool-test-000008
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;name&quot;: {
        &quot;type&quot;: &quot;text&quot;
      },
      &quot;age&quot;: {
        &quot;type&quot;: &quot;integer&quot;
      }
    }
  }
}

POST fishool-test-000008/_doc/1
{
  &quot;name&quot;: &quot;fishool&quot;,
  &quot;age&quot;: 18
}

PUT fishool-test-000008/_create/1
{
  &quot;name&quot;: &quot;fishool_confict&quot;,
  &quot;age&quot;: 18
}

POST fishool-test-000008/_doc
{
  &quot;name&quot;: &quot;fishool_post&quot;,
  &quot;age&quot;: 18
}

POST fishool-test-000008/_create/2
{
  &quot;name&quot;: &quot;fishool_post_2&quot;,
  &quot;age&quot;: 18
}

GET fishool-test-000008/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="request-请求参数" tabindex="-1"><a class="header-anchor" href="#request-请求参数" aria-hidden="true">#</a> Request 请求参数</h3><p><strong>url参数</strong></p><ul><li>_id 用于指定文档的ID, 如果不指定, 则会自动生成</li><li>if_seq_no 并发顺序号</li><li>if_primary_term 并发更新主分配顺序号</li><li>version 版本号</li><li>version_type 版本类型</li><li>op_type 操作类型 create(新建)|index(新建或覆盖更新) 如果指定了_id 则默认为index, 否则为create</li><li>refresh 是否立刻刷新</li><li>routing 路由, 默认id 基于hash算法计算所属分片</li><li>wait_for_active_shards 等待写入完成响应分片数</li><li>pipeline 管道, 用于数据处理</li><li>timeout 写入超时时间, 默认1m</li><li>require_alias 是否允许别名写入, 默认true</li></ul><h3 id="response-响应参数" tabindex="-1"><a class="header-anchor" href="#response-响应参数" aria-hidden="true">#</a> Response 响应参数</h3><ul><li>_id 数据唯一id</li><li>result 结果 created|updated</li><li>_version 版本号</li><li>_seq_no 并发顺序号</li><li>_primary_term 并发更新主分配顺序号</li><li>shards.** 分片信息</li></ul><p><strong>关联影响</strong></p><ul><li>若新增数据, 有新增加的字段, 则会自动更新索引的mapping</li></ul><h3 id="bulk-批量写入" tabindex="-1"><a class="header-anchor" href="#bulk-批量写入" aria-hidden="true">#</a> bulk 批量写入</h3>`,10),g={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-bulk.html",target:"_blank",rel:"noopener noreferrer"},x=l(`<ul><li>bulk</li><li>POST /_bulk</li><li>POST /{index}/_bulk</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE fishool-test-000008
PUT fishool-test-000008
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;name&quot;: {
        &quot;type&quot;: &quot;text&quot;
      },
      &quot;age&quot;: {
        &quot;type&quot;: &quot;integer&quot;
      }
    }
  }
}

POST _bulk
{ &quot;index&quot; : { &quot;_index&quot; : &quot;fishool-test-000008&quot;, &quot;_id&quot; : &quot;1&quot; } }
{ &quot;name&quot;: &quot;fishool1&quot;, &quot;age&quot;: 18 }
{ &quot;index&quot; : { &quot;_index&quot; : &quot;fishool-test-000008&quot;, &quot;_id&quot; : &quot;2&quot; } }
{ &quot;name&quot;: &quot;fishool_2&quot;, &quot;age&quot;: 18 }
{ &quot;index&quot; : { &quot;_index&quot; : &quot;fishool-test-000008&quot;, &quot;_id&quot; : &quot;3&quot; } }
{ &quot;name&quot;: &quot;fishool_3&quot;, &quot;age&quot;: 18 }
{ &quot;index&quot; : { &quot;_index&quot; : &quot;fishool-test-000008&quot;, &quot;_id&quot; : &quot;4&quot; } }
{ &quot;name&quot;: &quot;fishool_4&quot;, &quot;age&quot;: 18 }
{ &quot;index&quot; : { &quot;_index&quot; : &quot;fishool-test-000008&quot;, &quot;_id&quot; : &quot;5&quot; } }
{ &quot;name&quot;: &quot;fishool_5&quot;, &quot;age&quot;: 18 }

GET fishool-test-000008/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="request-请求参数-1" tabindex="-1"><a class="header-anchor" href="#request-请求参数-1" aria-hidden="true">#</a> Request 请求参数</h3><p><strong>url参数</strong></p><ul><li>refresh 是否立刻刷新</li><li>routing 路由, 默认id 基于hash算法计算所属分片</li><li>pipeline 管道, 用于数据处理</li><li>wait_for_active_shards 等待写入完成响应分片数</li><li>_source 是否返回_source</li></ul><p><strong>body参数</strong></p><ul><li>create 新增数据</li><li>index 新增或覆盖更新</li></ul><h3 id="response-响应参数-1" tabindex="-1"><a class="header-anchor" href="#response-响应参数-1" aria-hidden="true">#</a> Response 响应参数</h3><ul><li>errors 是否有错误</li><li>items 成功的数据</li></ul><h2 id="索引删除数据" tabindex="-1"><a class="header-anchor" href="#索引删除数据" aria-hidden="true">#</a> 索引删除数据</h2>`,10),T={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-delete.html",target:"_blank",rel:"noopener noreferrer"},E=l(`<h3 id="单条删除" tabindex="-1"><a class="header-anchor" href="#单条删除" aria-hidden="true">#</a> 单条删除</h3><ul><li>delete</li><li id="">DELETE /{index}/_doc/</li></ul><p><strong>案例联系</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE fishool-test-000008
PUT fishool-test-000008
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;name&quot;: {
        &quot;type&quot;: &quot;text&quot;
      },
      &quot;age&quot;: {
        &quot;type&quot;: &quot;integer&quot;
      }
    }
  }
}

PUT fishool-test-000008/_doc/1
{
  &quot;name&quot;: &quot;fishool1&quot;,
  &quot;age&quot;: 18
}

GET fishool-test-000008/_search
DELETE fishool-test-000008/_doc/1

POST fishool-test-000008/_refresh
POST fishool-test-000008/_flush
GET fishool-test-000008/_search

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="request-请求参数-2" tabindex="-1"><a class="header-anchor" href="#request-请求参数-2" aria-hidden="true">#</a> Request 请求参数</h3><p><strong>url参数</strong></p><ul><li>_id 用于指定文档的ID, 如果不指定, 则会自动生成</li><li>if_seq_no 并发顺序号</li><li>if_primary_term 并发更新主分配顺序号</li><li>version 版本号</li><li>version_type 版本类型</li><li>op_type 操作类型 create(新建)|index(新建或覆盖更新) 如果指定了_id 则默认为index, 否则为create</li><li>refresh 是否立刻刷新</li><li>routing 路由, 默认id 基于hash算法计算所属分片</li><li>wait_for_active_shards 等待写入完成响应分片数</li><li>pipeline 管道, 用于数据处理</li><li>timeout 写入超时时间, 默认1m</li><li>require_alias 是否允许别名写入, 默认true</li></ul><h3 id="delete-by-query-条件删除" tabindex="-1"><a class="header-anchor" href="#delete-by-query-条件删除" aria-hidden="true">#</a> _delete_by_query 条件删除</h3><p>POST {index}/_delete_by_query { queryDSL }</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE fishool-test-000008
POST fishool-test-000008/_doc/1
{
  &quot;name&quot;: &quot;fishool1&quot;,
  &quot;age&quot;: 18
}

POST fishool-test-000008/_doc/2
{
  &quot;name&quot;: &quot;fishool2&quot;,
  &quot;age&quot;: 19
}

POST fishool-test-000008/_doc/3
{
  &quot;name&quot;: &quot;fishool3&quot;,
  &quot;age&quot;: 20
}

# 查询
GET fishool-test-000008/_search
{
  &quot;query&quot;: {
    &quot;term&quot;: {
      &quot;name&quot;: {
        &quot;value&quot;: &quot;fishool1&quot;
      }
    }
  }
}

# 删除
POST fishool-test-000008/_delete_by_query
{
  &quot;query&quot;: {
    &quot;term&quot;: {
      &quot;name&quot;: {
        &quot;value&quot;: &quot;fishool1&quot;
      }
    }
  }
}

GET fishool-test-000008/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>URL参数</strong></p><ul><li>scroll_size 删除时使用快照查询, 指定快照大小. 默认1000</li><li>requests_per_second 每秒处理的数据条数, 默认无限制. 在海量日志下, 建议500-1000</li><li>conflicts 冲突处理方式 abort(中断)|proceed(继续)</li><li>slices 并发处理分片数, 默认1</li></ul><h3 id="任务管理" tabindex="-1"><a class="header-anchor" href="#任务管理" aria-hidden="true">#</a> 任务管理</h3><p>条件删除是异步操作, 可以通过任务管理来查看删除进度, 也可以取消删除任务</p><p><strong>案例练习</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 按操作类型查询   
GET _tasks?detailed=true&amp;actions=*delete_by_query

# 检索2
GET _tasks?r1Axxdjalfsfj:4412

# 检索3
GET _cat/tasks?v

# 取消任务
POST _tasks/r1Axxdjalfsfj:4412/_cancel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="批量删除" tabindex="-1"><a class="header-anchor" href="#批量删除" aria-hidden="true">#</a> 批量删除</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE fishool-test-000008
POST fishool-test-000008/_doc/1
{
  &quot;name&quot;: &quot;fishool1&quot;,
  &quot;age&quot;: 18
}

POST fishool-test-000008/_doc/2
{
  &quot;name&quot;: &quot;fishool2&quot;,
  &quot;age&quot;: 18
}

POST fishool-test-000008/_doc/3
{
  &quot;name&quot;: &quot;fishool3&quot;,
  &quot;age&quot;: 18
}

POST _bulk
{ &quot;delete&quot;: { &quot;_index&quot;: &quot;fishool-test-000008&quot;, &quot;_id&quot;: &quot;1&quot; } }
{ &quot;delete&quot;: { &quot;_index&quot;: &quot;fishool-test-000008&quot;, &quot;_id&quot;: &quot;2&quot; } }
{ &quot;delete&quot;: { &quot;_index&quot;: &quot;fishool-test-000008&quot;, &quot;_id&quot;: &quot;3&quot; } }


GET fishool-test-000008/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="源码解读" tabindex="-1"><a class="header-anchor" href="#源码解读" aria-hidden="true">#</a> 源码解读</h2><ul><li>RestBulkAction</li><li>RestIndexAction</li><li>TransportBulkAction</li><li>TransportIndexAction</li><li>TransportShardBulkAction</li><li>TransportWriteAction</li><li>TransportReplicationAction</li><li>InternalEngine</li><li>TimeBasedUUIDGenerator</li></ul>`,20);function y(k,P){const n=o("ExternalLinkIcon");return d(),u("div",null,[a,v,e("p",null,[e("a",c,[i("官方文档"),s(n)]),e("a",q,[i("文档写入"),s(n)]),e("a",m,[i("条件删除"),s(n)]),e("a",b,[i("批量操作"),s(n)])]),h,_,e("p",null,[e("a",f,[i("官方文档"),s(n)])]),p,e("p",null,[e("a",g,[i("官方文档"),s(n)])]),x,e("p",null,[e("a",T,[i("官方文档"),s(n)])]),E])}const O=t(r,[["render",y],["__file","第8节-写入数据与删除数据如何避坑.html.vue"]]);export{O as default};
