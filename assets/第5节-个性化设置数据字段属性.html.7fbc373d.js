import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as u,a as e,b as i,f as s,d as l,r as o}from"./app.5f15ca94.js";const r={},a=e("h1",{id:"第1节-动手配置自己的es运行环境笔记",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#第1节-动手配置自己的es运行环境笔记","aria-hidden":"true"},"#"),i(" 第1节-动手配置自己的ES运行环境笔记")],-1),v=e("h2",{id:"官网文档",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#官网文档","aria-hidden":"true"},"#"),i(" 官网文档")],-1),c={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-params.html",target:"_blank",rel:"noopener noreferrer"},m=e("br",null,null,-1),q={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-date-format.html",target:"_blank",rel:"noopener noreferrer"},b=e("br",null,null,-1),h={href:"https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"常用字段属性",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#常用字段属性","aria-hidden":"true"},"#"),i(" 常用字段属性")],-1),_=e("h3",{id:"index-是否可以检索",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#index-是否可以检索","aria-hidden":"true"},"#"),i(" index 是否可以检索")],-1),f=e("ul",null,[e("li",null,"是否创建索引, 字段可以被检索, 默认为true")],-1),g={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-index.html",target:"_blank",rel:"noopener noreferrer"},x=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;name&quot;: {
        &quot;type&quot;: &quot;text&quot;
      },
        &quot;age&quot;: {
            &quot;type&quot;: &quot;integer&quot;
        },
        &quot;description&quot;: {
            &quot;index&quot;: false,
            &quot;type&quot;: &quot;text&quot;
        }
    }
  }
}

# 插入数据
POST /foolish-test-0001/_doc
{
  &quot;name&quot;: &quot;fishool&quot;,
  &quot;age&quot;: 18,
  &quot;description&quot;: &quot;this is a description&quot;
}

# 检索数据
GET /foolish-test-0001/_search
{
  &quot;query&quot;: {
    &quot;match&quot;: {
      &quot;description&quot;: &quot;this is a description&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="store-是否存储" tabindex="-1"><a class="header-anchor" href="#store-是否存储" aria-hidden="true">#</a> store 是否存储</h3>`,2),w=e("li",null,"ES会存储原始数据在_source中, 除此歪 Lucene中也可以存储",-1),y=e("li",null,"store: 属性关键字",-1),T=e("li",null,"默认为false, 不存储",-1),E={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-store.html",target:"_blank",rel:"noopener noreferrer"},k=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;_source&quot;: {
      &quot;enabled&quot;: false
    },
    &quot;properties&quot;: {
      &quot;name&quot;: {
        &quot;type&quot;: &quot;text&quot;
      },
        &quot;age&quot;: {
             &quot;store&quot;: true,
            &quot;type&quot;: &quot;integer&quot;
        },
        &quot;description&quot;: {
            &quot;store&quot;: true,
            &quot;type&quot;: &quot;text&quot;
        }
    }
  }
}

# 插入数据
POST /foolish-test-0001/_doc
{
  &quot;name&quot;: &quot;fishool&quot;,
  &quot;age&quot;: 18,
  &quot;description&quot;: &quot;this is a description&quot;
}

# 检索数据
GET /foolish-test-0001/_search
{
  &quot;stored_fields&quot;: [&quot;*&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="enabled-是否启用" tabindex="-1"><a class="header-anchor" href="#enabled-是否启用" aria-hidden="true">#</a> enabled 是否启用</h3>`,2),P={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-enabled.html",target:"_blank",rel:"noopener noreferrer"},S=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;name&quot;: {
        &quot;type&quot;: &quot;text&quot;
      },
        &quot;age&quot;: {
            &quot;type&quot;: &quot;integer&quot;
        },
        &quot;description&quot;: {
            &quot;type&quot;: &quot;text&quot;
        },
        &quot;address&quot;: {
            &quot;enabled&quot;: false,
            &quot;properties&quot;: {
                &quot;province&quot;: {
                    &quot;type&quot;: &quot;text&quot;
                },
                &quot;city&quot;: {
                    &quot;type&quot;: &quot;text&quot;
                }
            }
        }
    }
  }
}

# 插入数据
POST /foolish-test-0001/_doc
{
  &quot;name&quot;: &quot;fishool&quot;,
  &quot;age&quot;: 18,
  &quot;description&quot;: &quot;this is a description&quot;,
  &quot;address&quot;: {
      &quot;province&quot;: &quot;广东&quot;,
      &quot;city&quot;: &quot;深圳&quot;
  }
}

# 检索数据
GET /foolish-test-0001/_search
{
  &quot;query&quot;: {
    &quot;match&quot;: {
      &quot;address.province&quot;: &quot;广东&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="doc-values-是否支持聚合-排序" tabindex="-1"><a class="header-anchor" href="#doc-values-是否支持聚合-排序" aria-hidden="true">#</a> doc_values 是否支持聚合/排序</h3><ul><li>是否启用列示存储, 默认为true , 用于数据聚合和排序</li><li>doc_values: 关键字</li></ul>`,3),O={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-doc-values.html",target:"_blank",rel:"noopener noreferrer"},L=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;name&quot;: {
        &quot;type&quot;: &quot;text&quot;
      },
        &quot;age&quot;: {
            &quot;doc_values&quot;: true,
            &quot;type&quot;: &quot;integer&quot;
        },
        &quot;description&quot;: {
            &quot;type&quot;: &quot;text&quot;
        }
    }
  }
}

# 插入数据
POST /foolish-test-0001/_doc
{
  &quot;name&quot;: &quot;fishool18&quot;,
  &quot;age&quot;: 18,
  &quot;description&quot;: &quot;this is a description&quot;
}

POST /foolish-test-0001/_doc
{
  &quot;name&quot;: &quot;fishool19&quot;,
  &quot;age&quot;: 19,
  &quot;description&quot;: &quot;this is a description&quot;
}

POST /foolish-test-0001/_doc
{
  &quot;name&quot;: &quot;fishool19&quot;,
  &quot;age&quot;: 19,
  &quot;description&quot;: &quot;this is a description&quot;
}


# 检索数据
GET /foolish-test-0001/_search
{
  &quot;aggs&quot;: {
    &quot;age_count&quot;: {
      &quot;terms&quot;: {
        &quot;field&quot;: &quot;age&quot;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="null-value-空值设置" tabindex="-1"><a class="header-anchor" href="#null-value-空值设置" aria-hidden="true">#</a> null_value 空值设置</h3><ul><li>null_value: 空值索引设置, 主要功能是为了占用索引, 方便聚合,搜索</li><li>需要和数据库的null区分 , es 只有在字段值为null时才会索引null_value</li></ul>`,3),D={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/null-value.html",target:"_blank",rel:"noopener noreferrer"},U=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;name&quot;: {
        &quot;type&quot;: &quot;text&quot;
      },
        &quot;age&quot;: {
            &quot;null_value&quot;: 0,
            &quot;type&quot;: &quot;integer&quot;
        },
        &quot;description&quot;: {
            &quot;type&quot;: &quot;text&quot;
        }
    }
  }
}

# 插入数据
POST /foolish-test-0001/_doc
{
  &quot;name&quot;: &quot;fishool18&quot;,
  &quot;age&quot;: 18,
  &quot;description&quot;: &quot;this is a description&quot;
}

POST /foolish-test-0001/_doc
{
  &quot;name&quot;: &quot;fishool19&quot;,
  &quot;description&quot;: &quot;this is a description&quot;
}

POST /foolish-test-0001/_doc
{
  &quot;name&quot;: &quot;fishool_null&quot;,
  &quot;age&quot;: null,
  &quot;description&quot;: &quot;this is a description&quot;
}

# 检索数据
GET /foolish-test-0001/_search
{
  &quot;aggs&quot;: {
    &quot;age_sum&quot;: {
      &quot;sum&quot;: {
        &quot;field&quot;: &quot;age&quot;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="properties-子对象字段约束" tabindex="-1"><a class="header-anchor" href="#properties-子对象字段约束" aria-hidden="true">#</a> properties 子对象字段约束</h3><p>用于描述 子字段对象类型</p>`,3),G={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/properties.html",target:"_blank",rel:"noopener noreferrer"},M=e("h3",{id:"dynamic-子对象动态扩展",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dynamic-子对象动态扩展","aria-hidden":"true"},"#"),i(" dynamic 子对象动态扩展")],-1),j=e("ul",null,[e("li",null,"dynamic: true, 默认为true, 表示动态扩展子对象"),e("li",null,"dynamic: false, 新字段仅仅存储到原始文档中, 不会创建索引"),e("li",null,"dynamic: strict, 新字段会报错")],-1),z={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/dynamic.html",target:"_blank",rel:"noopener noreferrer"},F=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;dynamic&quot;: &quot;strict&quot;,
    &quot;properties&quot;: {
      &quot;name&quot;: {
        &quot;type&quot;: &quot;text&quot;
      },
        &quot;age&quot;: {
            &quot;type&quot;: &quot;integer&quot;
        },
        &quot;description&quot;: {
            &quot;type&quot;: &quot;text&quot;
        }
    }
  }
}

# 插入数据
POST /foolish-test-0001/_doc
{
  &quot;name&quot;: &quot;fishool18&quot;,
  &quot;age&quot;: 18,
  &quot;description&quot;: &quot;this is a description&quot;,
  &quot;xkey&quot;: &quot;xvalue&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ignore-above-字符超长忽略" tabindex="-1"><a class="header-anchor" href="#ignore-above-字符超长忽略" aria-hidden="true">#</a> ignore_above 字符超长忽略</h3>`,2),N={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/ignore-above.html",target:"_blank",rel:"noopener noreferrer"},V=e("h3",{id:"coerce-数值格式强制约束",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#coerce-数值格式强制约束","aria-hidden":"true"},"#"),i(" coerce 数值格式强制约束")],-1),B={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/coerce.html",target:"_blank",rel:"noopener noreferrer"},I=l(`<p>coerce 强制进行类型转换, 默认为true , 可以将字符串转存入到数值类型的字段中 设置为false, 存储时会报错</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;name&quot;: {
        &quot;type&quot;: &quot;text&quot;
      },
        &quot;age&quot;: { 
            &quot;coerce&quot;: false,
            &quot;type&quot;: &quot;integer&quot;
        },
        &quot;weight&quot;: { 
            &quot;type&quot;: &quot;integer&quot;
        },
        &quot;description&quot;: {
            &quot;type&quot;: &quot;text&quot;
        }
    }
  }
}

# 插入数据
POST /foolish-test-0001/_doc
{
  &quot;name&quot;: &quot;fishool18&quot;,
  &quot;age&quot;: 18,
  &quot;weight&quot;: 80,
  &quot;description&quot;: &quot;this is a description&quot;
}

POST /foolish-test-0001/_doc
{
  &quot;name&quot;: &quot;fishool18&quot;,
  &quot;age&quot;: 18,
  &quot;weight&quot;: &quot;80&quot;,
  &quot;description&quot;: &quot;this is a description&quot;
}

POST /foolish-test-0001/_doc
{
  &quot;name&quot;: &quot;fishool18&quot;,
  &quot;age&quot;: &quot;18&quot;,
  &quot;weight&quot;: 80,
  &quot;description&quot;: &quot;this is a description&quot;
}

# 检索数据
GET /foolish-test-0001/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="format-日期格式约束" tabindex="-1"><a class="header-anchor" href="#format-日期格式约束" aria-hidden="true">#</a> format 日期格式约束</h3>`,3),A={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/date-format.html",target:"_blank",rel:"noopener noreferrer"},C=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;name&quot;: {
        &quot;type&quot;: &quot;text&quot;
      },
        &quot;birthday&quot;: { 
            &quot;format&quot;: &quot;yyyy-MM-dd||epoch_millis&quot;,
            &quot;type&quot;: &quot;date&quot;
        },
        &quot;description&quot;: {
            &quot;type&quot;: &quot;text&quot;
        }
    }
  }
}

# 插入数据
POST /foolish-test-0001/_doc
{
  &quot;name&quot;: &quot;fishool18&quot;,
  &quot;birthday&quot;: &quot;1999-01-01&quot;,
  &quot;description&quot;: &quot;this is a description&quot;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高级字段属性" tabindex="-1"><a class="header-anchor" href="#高级字段属性" aria-hidden="true">#</a> 高级字段属性</h2>`,2),K={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-meta-field.html",target:"_blank",rel:"noopener noreferrer"},H=e("ul",null,[e("li",null,"用于添加一些额外的信息, 如作者 , 索引描述等")],-1),J={start:"2"},Q={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-analyzers.html",target:"_blank",rel:"noopener noreferrer"},R={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/index-modules-similarity.html",target:"_blank",rel:"noopener noreferrer"},W={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/boosting.html",target:"_blank",rel:"noopener noreferrer"},X={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/norms.html",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/normalizer.html",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/eager-global-ordinals.html",target:"_blank",rel:"noopener noreferrer"},$=l('<ul><li>全局序号 , 用于字符串类聚合统计 , keyword类型采用. 用于提前排序, 提高聚合统计性能.</li><li>默认不启用, 可以通过设置eager_global_ordinals: true 来启用</li><li>当字段类型为keyword时, 会自动启用 , 生成大量的全局序号.</li></ul><h2 id="源码解读" tabindex="-1"><a class="header-anchor" href="#源码解读" aria-hidden="true">#</a> 源码解读</h2><p>Mapper</p><ul><li>TextParams</li><li>FieldType</li><li>Field</li><li>KeywordFieldMapper</li><li>ObjectMapper</li></ul>',4);function ee(ie,ne){const n=o("ExternalLinkIcon");return d(),u("div",null,[a,v,e("p",null,[e("a",c,[i("字段属性列表"),s(n)]),m,e("a",q,[i("format日期格式"),s(n)]),b,e("a",h,[i("format日期格式Api"),s(n)])]),p,_,f,e("p",null,[i("应用场景: 公司的概述信息, 商品描述详情, 一般不需要检索, 只需要存储, 所以设置为false "),e("a",g,[i("官方文档"),s(n)])]),x,e("ul",null,[w,y,T,e("li",null,[i("stored_fields: 查询时指定返回存储的字段 "),e("a",E,[i("官方文档"),s(n)])])]),k,e("ul",null,[e("li",null,[i("object类型的字段, 指定对象下的字段是否创建索引, 默认启动 "),e("a",P,[i("官方文档"),s(n)])])]),S,e("p",null,[e("a",O,[i("官方文档"),s(n)])]),L,e("p",null,[e("a",D,[i("官方文档"),s(n)])]),U,e("p",null,[e("a",G,[i("官方文档"),s(n)])]),M,j,e("p",null,[e("a",z,[i("官方文档"),s(n)])]),F,e("ul",null,[e("li",null,[i("ignore_above: 256, 默认为256, 表示超过256个字符的字段不会被索引 等同于index: false "),e("a",N,[i("官方文档"),s(n)])])]),V,e("p",null,[e("a",B,[i("官方文档"),s(n)])]),I,e("p",null,[e("a",A,[i("官方文档"),s(n)])]),C,e("ol",null,[e("li",null,[i("meta 元数据 "),e("a",K,[i("官方文档"),s(n)])])]),H,e("ol",J,[e("li",null,[e("p",null,[i("analyzer 分词器 "),e("a",Q,[i("官方文档"),s(n)])])]),e("li",null,[e("p",null,[i("similarity 相似度算法 "),e("a",R,[i("官方文档"),s(n)])])]),e("li",null,[e("p",null,[i("boost 权重 "),e("a",W,[i("官方文档"),s(n)])])]),e("li",null,[e("p",null,[i("norms 归一化 "),e("a",X,[i("官方文档"),s(n)])])]),e("li",null,[e("p",null,[i("normalizer 归一化器 "),e("a",Y,[i("官方文档"),s(n)])])]),e("li",null,[e("p",null,[i("eager_global_ordinals 提前全局排序 "),e("a",Z,[i("官方文档"),s(n)])])])]),$])}const te=t(r,[["render",ee],["__file","第5节-个性化设置数据字段属性.html.vue"]]);export{te as default};
