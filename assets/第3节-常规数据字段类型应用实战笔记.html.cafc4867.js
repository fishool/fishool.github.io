import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as u,a as e,b as i,f as s,d as l,r as a}from"./app.5f15ca94.js";const o={},r=e("h1",{id:"第3节-常规数据字段类型应用实战笔记",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#第3节-常规数据字段类型应用实战笔记","aria-hidden":"true"},"#"),i(" 第3节-常规数据字段类型应用实战笔记")],-1),v=e("h2",{id:"官网文档",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#官网文档","aria-hidden":"true"},"#"),i(" 官网文档")],-1),c={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-types.html",target:"_blank",rel:"noopener noreferrer"},m=e("br",null,null,-1),q={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-source-field.html",target:"_blank",rel:"noopener noreferrer"},b=e("br",null,null,-1),h={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/dynamic.html",target:"_blank",rel:"noopener noreferrer"},p=e("br",null,null,-1),g={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-date-format.html",target:"_blank",rel:"noopener noreferrer"},_=e("br",null,null,-1),f={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-ngram-tokenizer.html",target:"_blank",rel:"noopener noreferrer"},y=e("br",null,null,-1),x={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/dynamic-field-mapping.html",target:"_blank",rel:"noopener noreferrer"},E=e("br",null,null,-1),T=l(`<ul><li>文本类型：text、keyword</li><li>数值类型：long、integer、short、byte、double、float、half_float、scaled_float</li><li>日期类型：date</li><li>布尔类型：boolean</li><li>二进制类型：binary</li><li>范围类型：integer_range、float_range、long_range、double_range、date_range</li><li>经纬度类型：geo_point、geo_shape</li><li>复合类型：object、nested、flattened</li><li>IP类型：ip</li><li>特殊类型：token_count</li><li>附加类型：completion、murmur3、percolator、join、alias、search_as_you_type</li><li>等等</li></ul><h2 id="创建mapping" tabindex="-1"><a class="header-anchor" href="#创建mapping" aria-hidden="true">#</a> 创建Mapping</h2><h3 id="创建索引" tabindex="-1"><a class="header-anchor" href="#创建索引" aria-hidden="true">#</a> 创建索引</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;user&quot;: {
        &quot;type&quot;: &quot;text&quot;
      },
      &quot;post_date&quot;: {
        &quot;type&quot;: &quot;date&quot;
      },
      &quot;age&quot;: {
        &quot;type&quot;: &quot;integer&quot;
      },
      &quot;city&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      }
    }
  }
}

GET /foolish-test-0001/_mapping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新mapping" tabindex="-1"><a class="header-anchor" href="#更新mapping" aria-hidden="true">#</a> 更新Mapping</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /foolish-test-0001/_mapping
{
  &quot;properties&quot;: {
    &quot;user&quot;: {
      &quot;type&quot;: &quot;text&quot;
    },
    &quot;post_date&quot;: {
      &quot;type&quot;: &quot;date&quot;
    },
    &quot;age&quot;: {
      &quot;type&quot;: &quot;integer&quot;
    },
    &quot;city&quot;: {
      &quot;type&quot;: &quot;keyword&quot;
    },
    &quot;province&quot;: {
      &quot;type&quot;: &quot;keyword&quot;
    }
  }
}
GET /foolish-test-0001/_mapping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置mapping" tabindex="-1"><a class="header-anchor" href="#设置mapping" aria-hidden="true">#</a> 设置Mapping</h3><p>es存储内容</p><p>es原文档存储 =&gt; 索引 _source 属性 luncene 存储 =&gt; 字段 store 属性 字段检索索引存储 =&gt; 字段 index 属性 列式文档存储 =&gt; 字段 doc_value属性</p><p>各存储方式都可以单独配置</p><ul><li>source: 是否存储原始数据, 默认为true</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
    &quot;mappings&quot;: {
        &quot;_source&quot;: {
        &quot;enabled&quot;: false
        },
        &quot;properties&quot;: {
        &quot;user&quot;: {
            &quot;store&quot;: true,
            &quot;type&quot;: &quot;text&quot;
        },
        &quot;post_date&quot;: {
            &quot;store&quot;: true,
            &quot;type&quot;: &quot;date&quot;
        },
        &quot;age&quot;: {
            &quot;store&quot;: true,
            &quot;type&quot;: &quot;integer&quot;
        },
        &quot;city&quot;: {
            &quot;store&quot;: true,
            &quot;type&quot;: &quot;keyword&quot;
        }
        }
    }
}

POST /foolish-test-0001/_doc/1
{
    &quot;user&quot;: &quot;kimchy&quot;,
    &quot;post_date&quot;: &quot;2009-11-15T14:12:12&quot;,
    &quot;age&quot;: 30,
    &quot;city&quot;: &quot;shanghai&quot;
}

GET /foolish-test-0001/_search
{
    &quot;stored_fields&quot;: [&quot;user&quot;, &quot;post_date&quot;, &quot;age&quot;, &quot;city&quot;]
    &quot;query&quot;: {
        &quot;match_all&quot;: {}
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>includes: 指定存储的字段</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
   &quot;mappings&quot;: {
      &quot;_source&quot;: {
         &quot;includes&quot;: [&quot;user&quot;, &quot;post_date&quot;]
      },
      &quot;properties&quot;: {
         &quot;user&quot;: {
            &quot;type&quot;: &quot;text&quot;
         },
         &quot;post_date&quot;: {
            &quot;type&quot;: &quot;date&quot;
         },
         &quot;age&quot;: {
            &quot;type&quot;: &quot;integer&quot;
         },
         &quot;city&quot;: {
            &quot;type&quot;: &quot;keyword&quot;
         }
      }
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>excludes: 指定不存储的字段</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;_source&quot;: {
      &quot;excludes&quot;: [
        &quot;user&quot;,
        &quot;post_date&quot;
      ]
    },
    &quot;properties&quot;: {
      &quot;user&quot;: {
        &quot;type&quot;: &quot;text&quot;
      },
      &quot;post_date&quot;: {
        &quot;type&quot;: &quot;date&quot;
      },
      &quot;age&quot;: {
        &quot;type&quot;: &quot;integer&quot;
      },
      &quot;city&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      },
      &quot;province&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dynamic-是否动态创建字段" tabindex="-1"><a class="header-anchor" href="#dynamic-是否动态创建字段" aria-hidden="true">#</a> dynamic 是否动态创建字段</h3><ul><li>true: 容许索引字段动态扩展</li><li>false: 允许字段动态扩展, 但是仅仅存储原始数据,不能被检索/聚合</li><li>strict : 不允许字段动态扩展, 会报错</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;dynamic&quot;: &quot;strict&quot;,
    &quot;properties&quot;: {
      &quot;user&quot;: {
        &quot;type&quot;: &quot;text&quot;
      },
      &quot;post_date&quot;: {
        &quot;type&quot;: &quot;date&quot;
      },
      &quot;age&quot;: {
        &quot;type&quot;: &quot;integer&quot;
      },
      &quot;city&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      },
      &quot;province&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      }
    }
  }
}

POST /foolish-test-0001/_doc
{
  &quot;user&quot;: &quot;foolish&quot;,
  &quot;post_date&quot;: &quot;2020-01-01&quot;,
  &quot;age&quot;: 18,
  &quot;city&quot;: &quot;beijing&quot;,
  &quot;province&quot;: &quot;beijing&quot;,
  &quot;country&quot;: &quot;china&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用字段类型" tabindex="-1"><a class="header-anchor" href="#常用字段类型" aria-hidden="true">#</a> 常用字段类型</h2><h3 id="字符类型" tabindex="-1"><a class="header-anchor" href="#字符类型" aria-hidden="true">#</a> 字符类型</h3><p>字符类型是ES 最常用之一, 内部实现是借助于lucene的分词器, 通过分词器将字符串分词, 然后存储到倒排索引中, 从而实现字符串的检索</p>`,22),w={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/text.html",target:"_blank",rel:"noopener noreferrer"},k=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;message&quot;: {
        &quot;type&quot;: &quot;text&quot;,
        &quot;analyzer&quot;: &quot;standard&quot;
      }
    }
  }
}

PUT /foolish-test-0001/_doc/1
{
  &quot;message&quot;: &quot;this is a test, fool is foolish&quot;
}

PUT /foolish-test-0001/_doc/2
{
  &quot;message&quot;: &quot;China is a big country&quot;
}

# 测试分词器
POST _analyze
{
  &quot;analyzer&quot;: &quot;standard&quot;,
  &quot;text&quot;: [&quot;this is a test, fool is foolish&quot;]
}

POST _analyze
{
  &quot;analyzer&quot;: &quot;standard&quot;,
  &quot;text&quot;: [&quot;China is a big country&quot;]
}

# 检索
GET /foolish-test-0001/_search
{
  &quot;query&quot;: {
    &quot;match&quot;: {
      &quot;message&quot;: &quot;foolish&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Keyword: 用于存储关键字, 不会被分词器分词, 会被索引, 会被存储(应用在精确值检索领域) keyword 类型划分</li><li>keyword: 用于存储关键字, 不会被分词器分词, 会被索引, 会被存储(应用在精确值检索领域)</li><li>constant_keyword: 固定值类型, 不会存储, 需要设置默认固定值,便于查询与统计, 避免错误和性能问题</li><li>wildcard: 通配符类型, 采用ngram分词器, 支持模糊查询, 性能比keyword差一些, 但是模糊查询比keyword强大</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;keyword_message&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      },
      &quot;constant_message&quot;: {
        &quot;type&quot;: &quot;constant_keyword&quot;,
        &quot;value&quot;: &quot;foolish&quot;
      },
     &quot;wildcard_message&quot;: {
        &quot;type&quot;: &quot;wildcard&quot;
     }
    }
  }
}

PUT /foolish-test-0001/_doc/1
{
  &quot;keyword_message&quot;: &quot;keyword123&quot;,
  &quot;wildcard_message&quot;: &quot;wildcard123&quot;
}

POST _analyze
{
  &quot;analyzer&quot;: &quot;keyword&quot;,
  &quot;text&quot;: [&quot;keyword123&quot;]
}


POST _analyze
{
  &quot;tokenizer&quot;: &quot;ngram&quot;,
  &quot;text&quot;: [&quot;wildcard123&quot;]
}

GET /foolish-test-0001/_search
{
  &quot;query&quot;: {
    &quot;match&quot;: {
      &quot;keyword_message&quot;: &quot;keyword123&quot;
    }
  }
}

GET /foolish-test-0001/_search
{
  &quot;query&quot;: {
    &quot;match&quot;: {
      &quot;constant_message&quot;: &quot;foolish&quot;
    }
  }
}

GET /foolish-test-0001/_search
{
  &quot;query&quot;: {
    &quot;wildcard&quot;: {
      &quot;wildcard_message&quot;: &quot;*card*&quot;
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数值类型" tabindex="-1"><a class="header-anchor" href="#数值类型" aria-hidden="true">#</a> 数值类型</h3>`,4),P=e("li",null,"long: 64位有符号整数 -9223372036854775808 ~ 9223372036854775807",-1),U=e("li",null,"integer: 32位有符号整数 -2147483648 ~ 2147483647",-1),D=e("li",null,"short: 16位有符号整数 -32768 ~ 32767",-1),S=e("li",null,"byte: 8位有符号整数 -128 ~ 127",-1),L={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/number.html",target:"_blank",rel:"noopener noreferrer"},M=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;long_message&quot;: {
        &quot;type&quot;: &quot;long&quot;
      },
      &quot;integer_message&quot;: {
        &quot;type&quot;: &quot;integer&quot;
      },
      &quot;short_message&quot;: {
        &quot;type&quot;: &quot;short&quot;
      },
      &quot;byte_message&quot;: {
        &quot;type&quot;: &quot;byte&quot;
      },
      &quot;unsigned_long_message&quot;: {
        &quot;type&quot;: &quot;unsigned_long&quot;
      }
    }
  }
}

PUT /foolish-test-0001/_doc/1
{
  &quot;long_message&quot;: 9223372036854775807,
  &quot;integer_message&quot;: 2147483647,
  &quot;short_message&quot;: 32767,
  &quot;byte_message&quot;: 127,
  &quot;unsigned_long_message&quot;: 18446744073709551615
}

GET /foolish-test-0001/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="浮点数值类型" tabindex="-1"><a class="header-anchor" href="#浮点数值类型" aria-hidden="true">#</a> 浮点数值类型</h3><ul><li>double: 64位双精度浮点数</li><li>float: 32位单精度浮点数</li><li>half_float: 16位单精度浮点数</li><li>scaled_float: 32位单精度浮点数, 但是可以设置精度因子 需要设置精度因子: scaling_factor, 例如: 10 , 100 , 1000 (value * scaling_factor) 作为long类型存储</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>

DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;double_message&quot;: {
        &quot;type&quot;: &quot;double&quot;
      },
      &quot;float_message&quot;: {
        &quot;type&quot;: &quot;float&quot;
      },
      &quot;half_float_message&quot;: {
        &quot;type&quot;: &quot;half_float&quot;
      },
      &quot;scaled_float_message&quot;: {
        &quot;type&quot;: &quot;scaled_float&quot;,
        &quot;scaling_factor&quot;: 100
      }
    }
  }
}

PUT /foolish-test-0001/_doc/1
{
  &quot;double_message&quot;: 1.7976931348623157E308,
  &quot;float_message&quot;: 3.4028235E38,
  &quot;half_float_message&quot;: 65504,
  &quot;scaled_float_message&quot;: 100.01
}

GET /foolish-test-0001/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日期类型" tabindex="-1"><a class="header-anchor" href="#日期类型" aria-hidden="true">#</a> 日期类型</h3><ul><li>date: 日期类型, 会被索引, 会被存储, 会被聚合, 会被排序</li><li>date_nanos: 有限范围大小 ,空间占用低, 默认 1970-2262</li></ul>`,6),G={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/date.html",target:"_blank",rel:"noopener noreferrer"},j=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;date_message&quot;: {
        &quot;type&quot;: &quot;date&quot;
      },
      &quot;date_time_message&quot;: {
        &quot;type&quot;: &quot;date&quot;,
        &quot;format&quot;: 
          &quot;yyyy-MM-dd HH:mm:ss||epoch_millis&quot;
        
      }
    }
  }
}

PUT /foolish-test-0001/_doc/1
{
  &quot;date_message&quot;: &quot;2020-01-01&quot;,
  &quot;date_time_message&quot;: &quot;2020-01-01 12:00:00&quot;
}

PUT /foolish-test-0001/_doc/2
{
  &quot;date_message&quot;: &quot;2020-01-01T12:00:00.000Z&quot;,
  &quot;date_time_message&quot;: 1577836800000
}

GET /foolish-test-0001/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复合类型" tabindex="-1"><a class="header-anchor" href="#复合类型" aria-hidden="true">#</a> 复合类型</h3><ul><li>Object: 对象类型, 应对复杂业务场景, 例如: 用户信息, 商品信息, 订单信息.<br> 对外使用Json协议, 但底层存储并非是json ,而是标准的字符链接方式</li></ul>`,3),O={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/object.html",target:"_blank",rel:"noopener noreferrer"},z=e("br",null,null,-1),R=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;user&quot;: {
        &quot;type&quot;: &quot;object&quot;,
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
  }
}

PUT /foolish-test-0001/_doc/1
{
  &quot;user&quot;: {
    &quot;name&quot;: &quot;foolish&quot;,
    &quot;age&quot;: 18
  }
}

GET /foolish-test-0001/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>array: 数组类型, ES 官方并没有提供array类型, 但是可以通过object类型来实现</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;user&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;properties&quot;: {
          &quot;name&quot;: {
            &quot;type&quot;: &quot;text&quot;
          },
          &quot;age&quot;: {
            &quot;type&quot;: &quot;integer&quot;
          },
          &quot;hobbies&quot;: {
            &quot;type&quot;: &quot;text&quot;
          }
        }
      }
    }
  }
}

PUT /foolish-test-0001/_doc/1
{
  &quot;user&quot;: {
    &quot;name&quot;: &quot;foolish&quot;,
    &quot;age&quot;: 18,
    &quot;hobbies&quot;: [&quot;basketball&quot;, &quot;football&quot;]
  }
}

GET /foolish-test-0001/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="range类型" tabindex="-1"><a class="header-anchor" href="#range类型" aria-hidden="true">#</a> Range类型</h3><p>Range类型, 用于存储范围数据,<br> 相比传统类型数据库, 性能优势明显, 内部使用BDK树实现, 有许多应用场景,<br> 例如: 衣服尺寸 ,设计时都是按照一个范围值设计的. 175-180, 180-185, 185-190</p>`,5),B={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/range.html",target:"_blank",rel:"noopener noreferrer"},C=l(`<ul><li>integer_range: 整数范围</li><li>float_range: 浮点数范围</li><li>long_range: 长整数范围</li><li>double_range: 双精度浮点数范围</li><li>date_range: 日期范围</li><li>ip_range: ip地址范围</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;age_range_key&quot;: {
        &quot;type&quot;: &quot;integer_range&quot;
      },
        &quot;float_range_key&quot;: {
            &quot;type&quot;: &quot;float_range&quot;
        },
        &quot;date_range_key&quot;: {
            &quot;type&quot;: &quot;date_range&quot;
        },
        &quot;ip_range_key&quot;: {
            &quot;type&quot;: &quot;ip_range&quot;
        },
        &quot;long_range_key&quot;: {
            &quot;type&quot;: &quot;long_range&quot;
        },
        &quot;double_range_key&quot;: {
            &quot;type&quot;: &quot;double_range&quot;
        }
    }
  }
}

PUT /foolish-test-0001/_doc/1
{
  &quot;age_range_key&quot;: {
    &quot;gte&quot;: 18,
    &quot;lte&quot;: 30
  },
  &quot;float_range_key&quot;: {
    &quot;gte&quot;: 1.1,
    &quot;lte&quot;: 2.2
  },
  &quot;date_range_key&quot;: {
    &quot;gte&quot;: &quot;2020-01-01&quot;,
    &quot;lte&quot;: &quot;2020-12-31&quot;
  }
}

GET /foolish-test-0001/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flattened-单一化类型" tabindex="-1"><a class="header-anchor" href="#flattened-单一化类型" aria-hidden="true">#</a> flattened 单一化类型</h3>`,3),H=e("li",null,[i("传统上, 创建对象类型, ES会自动创建对应的Mapping结构, 如果对象结构复杂, 会导致Mapping结构过于复杂,"),e("br"),i(" 发生 Mapping explosion")],-1),I={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/flattened.html",target:"_blank",rel:"noopener noreferrer"},N=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /bug_reports
PUT bug_reports
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;title&quot;: {
        &quot;type&quot;: &quot;text&quot;
      },
      &quot;labels&quot;: {
        &quot;type&quot;: &quot;flattened&quot;
      }
    }
  }
}

POST bug_reports/_doc/1
{
  &quot;title&quot;: &quot;Results are not sorted correctly.&quot;,
  &quot;labels&quot;: {
    &quot;priority&quot;: &quot;urgent&quot;,
    &quot;release&quot;: [&quot;v1.2.5&quot;, &quot;v1.3.0&quot;],
    &quot;timestamp&quot;: {
      &quot;created&quot;: 1541458026,
      &quot;closed&quot;: 1541457010
    }
  }
}

POST bug_reports/_search
{
  &quot;query&quot;: {
    &quot;term&quot;: {&quot;labels&quot;: &quot;urgent&quot;}
  }
}

POST bug_reports/_search
{
  &quot;query&quot;: {
    &quot;term&quot;: {&quot;labels.release&quot;: &quot;v1.3.0&quot;}
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字段类型自动推断" tabindex="-1"><a class="header-anchor" href="#字段类型自动推断" aria-hidden="true">#</a> 字段类型自动推断</h2><h3 id="启用字段类型自动推断" tabindex="-1"><a class="header-anchor" href="#启用字段类型自动推断" aria-hidden="true">#</a> 启用字段类型自动推断</h3><ul><li>ES 默认不启用字段类型自动推断;</li><li>常规情况下, 可以自动推测字符串类型 ,数值类型 , 日期类型</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;mappings&quot;: {
    &quot;numeric_detection&quot;: true,
    &quot;date_detection&quot;: true,
    &quot;dynamic_date_formats&quot;: [&quot;yyyy-MM-dd HH:mm:ss&quot;, &quot;yyyy-MM-dd&quot;]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="索引字段数限制" tabindex="-1"><a class="header-anchor" href="#索引字段数限制" aria-hidden="true">#</a> 索引字段数限制</h3><ul><li>ES 默认索引字段数限制为1000个, 可以通过设置index.mapping.total_fields.limit来修改</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;settings&quot;: {
    &quot;index.mapping.total_fields.limit&quot;: 2000
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象类型嵌套深度" tabindex="-1"><a class="header-anchor" href="#对象类型嵌套深度" aria-hidden="true">#</a> 对象类型嵌套深度</h3><ul><li>ES 默认对象类型嵌套深度为20层, 可以通过设置index.mapping.nested_fields.limit来修改, 建议不要超过3层</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /foolish-test-0001
PUT /foolish-test-0001
{
  &quot;settings&quot;: {
    &quot;index.mapping.depth.limit&quot;: 20
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字段设置变更生效" tabindex="-1"><a class="header-anchor" href="#字段设置变更生效" aria-hidden="true">#</a> 字段设置变更生效</h3><blockquote><p>字段类型变更 , 历史数据不会自动变更, 需要手动重建索引 . 新增字段, 会自动生效</p></blockquote><h2 id="源码解读" tabindex="-1"><a class="header-anchor" href="#源码解读" aria-hidden="true">#</a> 源码解读</h2><ul><li>RestPutMappingAction</li><li>PutMappingRequest</li><li>PutMappingAction</li><li>MetaDataCreateIndexService</li><li>MetaDataMappingService</li><li>MapperService</li></ul>`,15);function V(A,K){const n=a("ExternalLinkIcon");return t(),u("div",null,[r,v,e("p",null,[e("a",c,[i("数据字段类型"),s(n)]),m,e("a",q,[i("source设置"),s(n)]),b,e("a",h,[i("dynamic设置"),s(n)]),p,e("a",g,[i("format设置"),s(n)]),_,e("a",f,[i("ngram分词"),s(n)]),y,e("a",x,[i("字段类型自动推测"),s(n)]),E,i(" ES 是一款非常灵活的搜索引擎，它支持多种数据类型，包括：")]),T,e("ul",null,[e("li",null,[i("Text: 用于存储文本, 会被分词器分词, 会被索引, 会被存储 (应用在全文检索领域) "),e("a",w,[i("文档"),s(n)])])]),k,e("ul",null,[P,U,D,S,e("li",null,[i("unsigned_long: 64位无符号整数 0 ~ 18446744073709551615 "),e("a",L,[i("文档"),s(n)])])]),M,e("blockquote",null,[e("p",null,[e("a",G,[i("文档"),s(n)])])]),j,e("blockquote",null,[e("p",null,[e("a",O,[i("文档"),s(n)]),z,i(" 关键字: properties")])]),R,e("blockquote",null,[e("p",null,[e("a",B,[i("文档"),s(n)])])]),C,e("ul",null,[H,e("li",null,[i("flattened 单一化类型, 可以将对象类型的数据, 单一化存储, 也能使用和Object同样的查询方式 "),e("a",I,[i("文档"),s(n)])])]),N])}const F=d(o,[["render",V],["__file","第3节-常规数据字段类型应用实战笔记.html.vue"]]);export{F as default};
