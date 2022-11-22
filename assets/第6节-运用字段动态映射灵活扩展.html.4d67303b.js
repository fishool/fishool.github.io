import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as u,a as e,b as i,f as s,d as t,r as a}from"./app.5f15ca94.js";const r={},o=e("h1",{id:"第6节-运用字段动态映射灵活扩展",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#第6节-运用字段动态映射灵活扩展","aria-hidden":"true"},"#"),i(" 第6节-运用字段动态映射灵活扩展")],-1),v=e("h2",{id:"官网文档",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#官网文档","aria-hidden":"true"},"#"),i(" 官网文档")],-1),c={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/dynamic-field-mapping.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.elastic.co/guide/en/elasticsearch/plugins/current/mapper-size.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-doc-count-field.html",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.11/mapping-fields.html",target:"_blank",rel:"noopener noreferrer"},h=e("h2",{id:"索引元数据",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#索引元数据","aria-hidden":"true"},"#"),i(" 索引元数据")],-1),p=e("p",null,"ES 一条数据写入到索引中, 除了数据本身, 还会有一些元数据, 比如: 索引名, 类型名, 文档ID 等",-1),_=e("h3",{id:"index-标识性元数据-索引名称",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#index-标识性元数据-索引名称","aria-hidden":"true"},"#"),i(" _index 标识性元数据 索引名称")],-1),g={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-index-field.html",target:"_blank",rel:"noopener noreferrer"},f=e("h3",{id:"id-文档id",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#id-文档id","aria-hidden":"true"},"#"),i(" _id 文档ID")],-1),y={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-id-field.html",target:"_blank",rel:"noopener noreferrer"},w=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"注意"),e("p",null,"不推荐使用_id进行排序和归档. 有性能问题"),e("p",null,"The _id field is restricted from use in aggregations, sorting, and scripting. In case sorting or aggregating on the _id field is required, it is advised to duplicate the content of the _id field into another field that has doc_values enabled.")],-1),x=e("h3",{id:"source文档数据",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#source文档数据","aria-hidden":"true"},"#"),i(" _source文档数据")],-1),T={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-source-field.html",target:"_blank",rel:"noopener noreferrer"},E=e("h3",{id:"size-文档大小",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#size-文档大小","aria-hidden":"true"},"#"),i(" _size 文档大小")],-1),k={href:"https://www.elastic.co/guide/en/elasticsearch/plugins/current/mapper-size.html",target:"_blank",rel:"noopener noreferrer"},P=e("ul",null,[e("li",null,"计算文档占用大小"),e("li",null,"需要启用官方 mapper-size插件 默认未启用, 需要安装")],-1),U=e("p",null,"可以通过 mappings._size.enabled 设置是否计算文档数据大小 true/false",-1),D={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-doc-count-field.html",target:"_blank",rel:"noopener noreferrer"},j=e("h3",{id:"routing-路由",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#routing-路由","aria-hidden":"true"},"#"),i(" _routing 路由")],-1),L={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-routing-field.html",target:"_blank",rel:"noopener noreferrer"},G=t(`<ul><li>控制数据写入的分片</li><li>控制数据查询的分片</li><li>通过mapping._routing.required 设置是否必须设置路由 true/false</li><li>默认使用_id 进行路由. <strong>案例练习</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001

PUT /foolish-test-0001
{
  &quot;settings&quot;: {
    &quot;number_of_shards&quot;: 10,
    &quot;number_of_replicas&quot;: 1
  },
  &quot;mappings&quot;: {
    &quot;_routing&quot;: {
      &quot;required&quot;: true
    },
    &quot;properties&quot;: {
      &quot;name&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      },
      &quot;age&quot;: {
        &quot;type&quot;: &quot;integer&quot;
      },
      &quot;address&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      }
    }
  }
}

PUT /foolish-test-0001/_doc/1?routing=beijing
{
  &quot;name&quot;: &quot;张三&quot;,
  &quot;age&quot;: 18,
  &quot;address&quot;: &quot;beijing&quot;
}

PUT /foolish-test-0001/_doc/2?routing=shanghai
{
  &quot;name&quot;: &quot;李四&quot;,
  &quot;age&quot;: 10,
  &quot;address&quot;: &quot;shanghai&quot;
}

GET /foolish-test-0001/_search?routing=beijing
{
  &quot;query&quot;: {
    &quot;match_all&quot;: {}
  }
}

GET /foolish-test-0001/_search?routing=shanghai
{
  &quot;query&quot;: {
    &quot;match_all&quot;: {}
  }
}

GET /foolish-test-0001/_search?routing=456
{
  &quot;query&quot;: {
    &quot;match_all&quot;: {}
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ignored-忽略字段类型校验异常" tabindex="-1"><a class="header-anchor" href="#ignored-忽略字段类型校验异常" aria-hidden="true">#</a> _ignored 忽略字段类型校验异常</h3>`,3),z={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-ignored-field.html",target:"_blank",rel:"noopener noreferrer"},I=t(`<ul><li>当索引字段类型与写入的数据类型不一致时, 默认是不容许写入的</li><li>可以设置字段属性 ignore_malformed 为 true , 忽略字段类型校验异常, 允许写入</li><li>查询是否有被忽略的字段, 可以通过 _ignored 字段进行查询</li><li>ignore_malformed为true的字段可以正常进行索引查询.</li></ul><p><strong>案例练习</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;name&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      },
      &quot;age&quot;: {
        &quot;type&quot;: &quot;integer&quot;,
        &quot;ignore_malformed&quot;: true
      },
      &quot;address&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      }
    }
  }
}
# 错误数据
PUT /foolish-test-0001/_doc/1
{
  &quot;name&quot;: &quot;张三&quot;,
  &quot;age&quot;: &quot;18ss&quot;,
  &quot;address&quot;: &quot;beijing&quot;
}

PUT /foolish-test-0001/_doc/2
{
  &quot;name&quot;: &quot;张三29&quot;,
  &quot;age&quot;: 29,
  &quot;address&quot;: &quot;beijing&quot;
}

# 查询错误字段类型与数据
GET /foolish-test-0001/_search
{
  &quot;query&quot;: {
    &quot;exists&quot;: {
        &quot;field&quot;: &quot;_ignored&quot;
    }
  }
}

GET /foolish-test-0001/_search
{
  &quot;query&quot;: {
    &quot;term&quot;: {
        &quot;_ignored&quot;: &quot;age&quot;
    }
  }
}


GET /foolish-test-0001/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="meta-字段" tabindex="-1"><a class="header-anchor" href="#meta-字段" aria-hidden="true">#</a> meta 字段</h3>`,4),B={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-meta-field.html",target:"_blank",rel:"noopener noreferrer"},M=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;_meta&quot;: {
      &quot;author&quot;: &quot;foolish&quot;,
      &quot;description&quot;: &quot;测试索引&quot;
    },
    &quot;properties&quot;: {
      &quot;name&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      },
      &quot;age&quot;: {
        &quot;type&quot;: &quot;integer&quot;
      },
      &quot;address&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      }
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="索引字段动态类型匹配" tabindex="-1"><a class="header-anchor" href="#索引字段动态类型匹配" aria-hidden="true">#</a> 索引字段动态类型匹配</h2><table><thead><tr><th>Json 字段类型</th><th>ES 字段类型</th><th>备注</th></tr></thead><tbody><tr><td>null</td><td>无字段</td><td></td></tr><tr><td>123.123 浮点</td><td>float 类型</td><td></td></tr><tr><td>123</td><td>long 类型</td><td></td></tr><tr><td>object</td><td>object</td><td></td></tr><tr><td>array</td><td>object</td><td>基于第一条数据的类型</td></tr><tr><td>string</td><td>text/keyword混合</td><td></td></tr><tr><td>string-data</td><td>data</td><td></td></tr><tr><td>string-number</td><td>数值类型</td><td>可能是long/double</td></tr></tbody></table><h3 id="日期自动检测" tabindex="-1"><a class="header-anchor" href="#日期自动检测" aria-hidden="true">#</a> 日期自动检测</h3>`,4),N={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/date-detection.html",target:"_blank",rel:"noopener noreferrer"},V=t(`<ul><li>date_detection: 日期类型推断: true/false 默认为true</li><li>dynamic_date_formats: 日期格式化</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;date_detection&quot;: true,
    &quot;dynamic_date_formats&quot;: [
      &quot;yyyy-MM-dd HH:mm:ss&quot;,
      &quot;yyyy-MM-dd&quot;
    ],
    &quot;properties&quot;: {
      &quot;name&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      },
      &quot;age&quot;: {
        &quot;type&quot;: &quot;integer&quot;
      },
      &quot;address&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      }
    }
  }
}

PUT /foolish-test-0001/_doc/1
{
  &quot;name&quot;: &quot;张三&quot;,
  &quot;age&quot;: 18,
  &quot;address&quot;: &quot;beijing&quot;,
  &quot;birthday&quot;: &quot;2020-01-01&quot;
}

GET /foolish-test-0001/_mapping

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数值类型自动检测" tabindex="-1"><a class="header-anchor" href="#数值类型自动检测" aria-hidden="true">#</a> 数值类型自动检测</h3>`,3),F={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/number-detection.html",target:"_blank",rel:"noopener noreferrer"},S=t(`<ul><li>numeric_detection: 数值类型推断: true/false 默认为true</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;numeric_detection&quot;: true
  }
}

PUT /foolish-test-0001/_doc/1
{
  &quot;income1&quot;: &quot;1000&quot;,
    &quot;income2&quot;: 1001,
    &quot;income3&quot;: 1000.11,
    &quot;income4&quot;: &quot;1000.12&quot;
}

GET /foolish-test-0001/_mapping

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态模板" tabindex="-1"><a class="header-anchor" href="#动态模板" aria-hidden="true">#</a> 动态模板</h2>`,3),H={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/dynamic-templates.html",target:"_blank",rel:"noopener noreferrer"},C=t(`<ul><li>match_mapping_type: 动态字段类型, 并修正为指定类型</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;dynamic_templates&quot;: [
      {
        &quot;string_fields&quot;: {
          &quot;match_mapping_type&quot;: &quot;string&quot;,
          &quot;mapping&quot;: {
            &quot;type&quot;: &quot;keyword&quot;
          }
        }
      },
      {
        &quot;int_fields&quot;: {
          &quot;match_mapping_type&quot;: &quot;long&quot;,
          &quot;mapping&quot;: {
            &quot;type&quot;: &quot;integer&quot;
          }
        }
      }
    ]
  }
}

PUT /foolish-test-0001/_doc/1
{
  &quot;name&quot;: &quot;张三&quot;,
  &quot;age&quot;: 18,
  &quot;address&quot;: &quot;beijing&quot;,
  &quot;birthday&quot;: &quot;2020-01-01&quot;,
  &quot;income&quot;: &quot;1000&quot;
}

GET /foolish-test-0001/_mapping

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字段名称动态匹配" tabindex="-1"><a class="header-anchor" href="#字段名称动态匹配" aria-hidden="true">#</a> 字段名称动态匹配</h3><ul><li>match: 字段名称匹配</li><li>unmatch: 字段名称不匹配</li></ul><p><strong>案例练习</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;dynamic_templates&quot;: [
      {
        &quot;string_fields&quot;: {
          &quot;match&quot;: &quot;*_name&quot;,
          &quot;mapping&quot;: {
            &quot;type&quot;: &quot;keyword&quot;
          }
        }
      },
      {
        &quot;int_fields&quot;: {
          &quot;match&quot;: &quot;*_age&quot;,
          &quot;mapping&quot;: {
            &quot;type&quot;: &quot;integer&quot;
          }
        }
      }
    ]
  }
}

PUT /foolish-test-0001/_doc/1
{
  &quot;name&quot;: &quot;张三&quot;,
  &quot;age&quot;: 18,
  &quot;address&quot;: &quot;beijing&quot;,
  &quot;birthday&quot;: &quot;2020-01-01&quot;,
  &quot;income&quot;: &quot;1000&quot;,
  &quot;user_name&quot;: &quot;foolish&quot;,
  &quot;user_age&quot;: 18
}

GET /foolish-test-0001/_mapping

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字段路径动态匹配" tabindex="-1"><a class="header-anchor" href="#字段路径动态匹配" aria-hidden="true">#</a> 字段路径动态匹配</h3>`,7),J=e("li",null,"path_match: 字段路径匹配",-1),K={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/dynamic-templates.html#path-match",target:"_blank",rel:"noopener noreferrer"},A=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;dynamic_templates&quot;: [
      {
        &quot;string_fields&quot;: {
          &quot;path_match&quot;: &quot;user.name&quot;,
          &quot;mapping&quot;: {
            &quot;type&quot;: &quot;keyword&quot;
          }
        }
      },
      {
        &quot;int_fields&quot;: {
          &quot;path_match&quot;: &quot;user.age&quot;,
          &quot;mapping&quot;: {
            &quot;type&quot;: &quot;integer&quot;
          }
        }
      }
    ]
  }
}

PUT /foolish-test-0001/_doc/1
{
  &quot;name&quot;: &quot;张三&quot;,
  &quot;age&quot;: 18,
  &quot;address&quot;: &quot;beijing&quot;,
  &quot;birthday&quot;: &quot;2020-01-01&quot;,
  &quot;income&quot;: &quot;1000&quot;,
  &quot;user&quot;: {
    &quot;name&quot;: &quot;foolish&quot;,
    &quot;age&quot;: 18
  }
}

GET /foolish-test-0001/_mapping

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="源码解读" tabindex="-1"><a class="header-anchor" href="#源码解读" aria-hidden="true">#</a> 源码解读</h2><ul><li>DocumentParser</li><li>DynamicFieldsBuilder</li><li>DynamicKeyFieldTypeLookup</li><li>FieldTypeLookup</li><li>DynamicTemplate</li></ul>`,3);function O(Q,R){const n=a("ExternalLinkIcon");return l(),u("div",null,[o,v,e("p",null,[e("a",c,[i("动态字段"),s(n)]),e("a",m,[i("size插件"),s(n)]),e("a",b,[i("doc_count"),s(n)]),e("a",q,[i("meta字段"),s(n)])]),h,p,_,e("p",null,[i("可用于做查询,排序,聚合脚本等操作 "),e("a",g,[i("官网文档"),s(n)])]),f,e("p",null,[e("a",y,[i("官网文档"),s(n)])]),w,x,e("p",null,[e("a",T,[i("官网文档"),s(n)]),i(" 可通过 mappings._sorce.enabled 设置是否存储文档数据 true/false")]),E,e("p",null,[e("a",k,[i("官网文档"),s(n)])]),P,U,e("p",null,[i("###_doc_count 文档数量 "),e("a",D,[i("官网文档"),s(n)])]),j,e("p",null,[e("a",L,[i("官网文档"),s(n)])]),G,e("p",null,[e("a",z,[i("官网文档"),s(n)])]),I,e("p",null,[e("a",B,[i("官网文档"),s(n)]),i(" 自定义元数据, 用于存储索引描述,作者之内的信息")]),M,e("p",null,[e("a",N,[i("官网文档"),s(n)])]),V,e("p",null,[e("a",F,[i("官网文档"),s(n)])]),S,e("p",null,[e("a",H,[i("官网文档"),s(n)])]),C,e("ul",null,[J,e("li",null,[i("path_unmatch: 字段路径不匹配 "),e("a",K,[i("官网文档"),s(n)])])]),A])}const Y=d(r,[["render",O],["__file","第6节-运用字段动态映射灵活扩展.html.vue"]]);export{Y as default};
