import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as t,a as e,b as i,f as s,d as l,r as u}from"./app.5f15ca94.js";const r={},o=e("h1",{id:"第1节-动手配置自己的es运行环境笔记",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#第1节-动手配置自己的es运行环境笔记","aria-hidden":"true"},"#"),i(" 第1节-动手配置自己的ES运行环境笔记")],-1),v=e("h2",{id:"官网文档",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#官网文档","aria-hidden":"true"},"#"),i(" 官网文档")],-1),c={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/index-modules.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/aliases.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.1/indices-templates.html",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/index-templates.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-component-template.html",target:"_blank",rel:"noopener noreferrer"},p=l('<h2 id="索引别名" tabindex="-1"><a class="header-anchor" href="#索引别名" aria-hidden="true">#</a> 索引别名</h2><h3 id="为什么要使用索引别名" tabindex="-1"><a class="header-anchor" href="#为什么要使用索引别名" aria-hidden="true">#</a> 为什么要使用索引别名</h3><ul><li>为了方便管理索引</li><li>为了方便查询</li><li>为了方便数据迁移/备份/恢复</li></ul><h3 id="索引别名使用方式" tabindex="-1"><a class="header-anchor" href="#索引别名使用方式" aria-hidden="true">#</a> 索引别名使用方式</h3><ul><li>_alias API</li><li>_aliases API</li><li>创建索引时指定别名aliases</li><li>索引与别名的关系 为多对多的关系</li></ul><h3 id="alias-api-和-aliases" tabindex="-1"><a class="header-anchor" href="#alias-api-和-aliases" aria-hidden="true">#</a> _alias API 和 aliases</h3>',6),_={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/aliases.html",target:"_blank",rel:"noopener noreferrer"},f=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET _cat/aliases?v

DELETE /fishool-test-0001
PUT /fishool-test-0001
{
  &quot;aliases&quot;: {
    &quot;fishool-test-alias&quot;: {}
  },
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;name&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      },
      &quot;age&quot;: {
        &quot;type&quot;: &quot;integer&quot;
      }
    }
  }
}
# 追加索引别名0001
PUT fishool-test-0001/_alias/fishool-test-alias-0001

# 使用索引别名0001 加数据
PUT fishool-test-alias-0001/_doc/1
{
  &quot;name&quot;: &quot;fishool&quot;,
  &quot;age&quot;: 18
}
# 使用索引别名1 查询数据
GET fishool-test-alias/_doc/1


# 删除索引别名关联
DELETE /fishool-test-0001/_alias/fishool-test-alias-0001
DELETE /fishool-test-0001/_alias/fishool-test-alias

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="索引别名高级使用" tabindex="-1"><a class="header-anchor" href="#索引别名高级使用" aria-hidden="true">#</a> 索引别名高级使用</h3><h4 id="filter-别名查询过滤" tabindex="-1"><a class="header-anchor" href="#filter-别名查询过滤" aria-hidden="true">#</a> filter 别名查询过滤</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /fishool-test-0001
PUT /fishool-test-0001
{
  &quot;aliases&quot;: {
    &quot;fishool-test-alias&quot;: {
      &quot;filter&quot;: {
        &quot;term&quot;: {
          &quot;name&quot;: &quot;fishool&quot;
        }
      }
    }
  },
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;name&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      },
      &quot;age&quot;: {
        &quot;type&quot;: &quot;integer&quot;
      }
    }
  }
}

# 追加数据
PUT fishool-test-0001/_doc/1
{
  &quot;name&quot;: &quot;fishool&quot;,
  &quot;age&quot;: 18
}

PUT fishool-test-0001/_doc/2
{
  &quot;name&quot;: &quot;fishool2&quot;,
  &quot;age&quot;: 18
}

# 查询数据
GET fishool-test-alias/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="routing-别名路由" tabindex="-1"><a class="header-anchor" href="#routing-别名路由" aria-hidden="true">#</a> routing 别名路由</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /fishool-test-0001
PUT /fishool-test-0001
{
  &quot;settings&quot;: {
        &quot;number_of_shards&quot;: 100,
        &quot;number_of_replicas&quot;: 1
  },
  &quot;aliases&quot;: {
    &quot;fishool-test-alias&quot;: {
      &quot;routing&quot;: &quot;fishool&quot;
    }
  },
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;name&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      },
      &quot;age&quot;: {
        &quot;type&quot;: &quot;integer&quot;
      }
    }
  }
}


# 添加数据
PUT fishool-test-0001/_doc/1?routing=fishool
{
  &quot;name&quot;: &quot;fishool&quot;,
  &quot;age&quot;: 18
}

PUT fishool-test-0001/_doc/2?routing=fishool2
{
  &quot;name&quot;: &quot;fishool2&quot;,
  &quot;age&quot;: 18
}

# 查询数据
GET fishool-test-alias/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="aliases-批量别名维护" tabindex="-1"><a class="header-anchor" href="#aliases-批量别名维护" aria-hidden="true">#</a> _aliases 批量别名维护</h4><ul><li>_aliases API 可以批量维护索引别名</li><li>actions 为操作列表</li><li>add 为添加操作</li><li>remove 为删除操作</li><li>is_write_index 为是否为写索引 true/false</li><li>search_routing 为查询路由</li><li>index_routing 为索引路由</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /fishool-test-0001
PUT /fishool-test-0001
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;name&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      },
      &quot;age&quot;: {
        &quot;type&quot;: &quot;integer&quot;
      }
    }
  }
}

POST /_aliases
{
  &quot;actions&quot;: [
    {
      &quot;add&quot;: {
        &quot;index&quot;: &quot;fishool-test-0001&quot;,
        &quot;alias&quot;: &quot;fishool-test-alias&quot;,
        &quot;is_write_index&quot;: true,
        &quot;search_routing&quot;: &quot;fishool&quot;,
        &quot;index_routing&quot;: &quot;fishool&quot;
      }
    }
  ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="索引模板" tabindex="-1"><a class="header-anchor" href="#索引模板" aria-hidden="true">#</a> 索引模板</h2>`,10),g={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/index-templates.html",target:"_blank",rel:"noopener noreferrer"},x=l(`<div class="custom-container info"><p class="custom-container-title">相关信息</p><p>索引模板是一种可以应用到索引创建时的设置。索引模板可以匹配多个索引， 当创建索引时，如果匹配到索引模板，就会应用到索引创建时的设置。</p></div><h3 id="template-api-遗留版本" tabindex="-1"><a class="header-anchor" href="#template-api-遗留版本" aria-hidden="true">#</a> _template API (遗留版本)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET _template
GET _cat/templates?v
DELETE _template/fishool-template
DELETE fishool-test-0001
PUT _template/fishool-template
{
  &quot;index_patterns&quot;: [&quot;fishool-*&quot;],
  &quot;settings&quot;: {
    &quot;number_of_shards&quot;: 20
  },
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;name&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      },
      &quot;age&quot;: {
        &quot;type&quot;: &quot;integer&quot;
      }
    }
  }
}

PUT fishool-test-0001/_create/1
{
  &quot;name&quot;: &quot;fishool&quot;,
  &quot;age&quot;: 18
}

GET fishool-test-0001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="index-template-api-7-8" tabindex="-1"><a class="header-anchor" href="#index-template-api-7-8" aria-hidden="true">#</a> _index_template API (7.8+)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET _index_template
GET _cat/templates?v
GET _index_template/fishool-template

DELETE _template/fishool-template
DELETE _index_template/fishool-template
DELETE fishool-test-0001

PUT _index_template/fishool-template
{
  &quot;priority&quot;: 500,
  &quot;index_patterns&quot;: [
    &quot;fishool-*&quot;
  ],
  &quot;template&quot;: {
    &quot;settings&quot;: {
      &quot;number_of_shards&quot;: 10
    },
    &quot;mappings&quot;: {
      &quot;properties&quot;: {
        &quot;name&quot;: {
          &quot;type&quot;: &quot;keyword&quot;
        },
        &quot;age&quot;: {
          &quot;type&quot;: &quot;integer&quot;
        }
      }
    },
    &quot;aliases&quot;: {
      &quot;fishool-test-alias&quot;: {}
    }
  },
  &quot;_meta&quot;: {
      &quot;description&quot;: &quot;fishool index template&quot;
    }
}

PUT fishool-test-0001/_create/1
{
  &quot;name&quot;: &quot;fishool&quot;,
  &quot;age&quot;: 18
}

GET fishool-test-0001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="simulate索引模板模拟测试" tabindex="-1"><a class="header-anchor" href="#simulate索引模板模拟测试" aria-hidden="true">#</a> _simulate索引模板模拟测试</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST _index_template/_simulate/fishool-template


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="索引模板维护更新" tabindex="-1"><a class="header-anchor" href="#索引模板维护更新" aria-hidden="true">#</a> 索引模板维护更新</h3><ul><li>priority 优先级关键字</li><li>默认是0 越大优先级越高 . 推荐500起步</li></ul><h3 id="不支持在索引模板中设置动态字段模板-dynamic-templates" tabindex="-1"><a class="header-anchor" href="#不支持在索引模板中设置动态字段模板-dynamic-templates" aria-hidden="true">#</a> 不支持在索引模板中设置动态字段模板 dynamic_templates</h3><h3 id="component-template-api-7-8" tabindex="-1"><a class="header-anchor" href="#component-template-api-7-8" aria-hidden="true">#</a> _component_template API (7.8+)</h3>`,11),E={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-component-template.html",target:"_blank",rel:"noopener noreferrer"},T=l(`<ul><li>template 为模板内容</li><li>settings 为索引设置</li><li>mappings 为索引映射</li><li>aliases 为索引别名</li><li>composed_of 为组件模板列表</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET _component_template
DELETE fishool-test-0001
DELETE _component_template/fishool-component-template
PUT _component_template/fishool-component-template
{
  &quot;template&quot;: {
    &quot;settings&quot;: {
      &quot;number_of_shards&quot;: 6
    },
    &quot;mappings&quot;: {
      &quot;properties&quot;: {
        &quot;name&quot;: {
          &quot;type&quot;: &quot;keyword&quot;
        },
        &quot;age&quot;: {
          &quot;type&quot;: &quot;integer&quot;
        }
      }
    },
    &quot;aliases&quot;: {
      &quot;fishool-test-alias&quot;: {}
    }
  }
}


PUT _index_template/fishool-template
{
  &quot;index_patterns&quot;: [
    &quot;fishool-*&quot;
  ],
  &quot;composed_of&quot;: [
    &quot;fishool-component-template&quot;
  ],
  &quot;priority&quot;: 500
}

PUT fishool-test-0001/_create/2
{
  &quot;name&quot;: &quot;fishool&quot;,
  &quot;age&quot;: 18
}

GET fishool-test-0001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="源码解读" tabindex="-1"><a class="header-anchor" href="#源码解读" aria-hidden="true">#</a> 源码解读</h2><ul><li>MetadataIndexTemplateService</li><li>MetadataCreateIndexService</li></ul>`,4);function w(y,P){const n=u("ExternalLinkIcon");return a(),t("div",null,[o,v,e("p",null,[e("a",c,[i("官方文档"),s(n)]),e("a",m,[i("索引别名"),s(n)]),e("a",b,[i("索引模板-过期方式"),s(n)]),e("a",q,[i("索引模板-新"),s(n)]),e("a",h,[i("索引模板-组件"),s(n)])]),p,e("p",null,[e("a",_,[i("官网文档aliases"),s(n)])]),f,e("p",null,[e("a",g,[i("官网文档索引模板"),s(n)])]),x,e("p",null,[e("a",E,[i("官网文档组件模板"),s(n)])]),T])}const L=d(r,[["render",w],["__file","第7节-使用别名与模板助力索引设计a.html.vue"]]);export{L as default};
