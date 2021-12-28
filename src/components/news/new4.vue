<template>
  <div>
    <section id="news_content">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link :to="'/homepages'">首頁</router-link>
                </li>
                <li class="breadcrumb-item">
                  <router-link :to="'/knowus/allnews'">最新消息</router-link>
                </li>
                <li class="breadcrumb-item">Emberton 2021 全新限定色</li>
              </ol>
            </nav>
          </div>
          <div class="col-md-12">
            <div class="news_block_inner">
              <img
                class="news_img_inner img-fluid"
                src="~@/assets/knowus/4e0db8f3-761c-46f1-8a72-66765644e1c1-Emberton_family_1920x1080.jpg"
              >
              <h5 class="news_title_inner">Emberton 2021 全新限定色</h5>
              <span class="date">2021-04-09</span>

              <div class="news_content_inner">
                <p><strong>搖滾，一手掌握。</strong><br><strong>Emberton 雖為 Marshall 攜帶式藍牙喇叭系列中最小身型，強大音效與防水設計仍不容忽視，成為眾多媒體與網友心目中的野餐、露營必備物件，去年底首次推出限定色古銅黑，黑金配色創造了一波搶購潮。</strong></p>
                <p><strong>這次，Marshall 再度帶來 Emberton 全新限定色，數量有限，不容錯過。</strong></p>
                <hr>
                <h4><img
                    src="~@/assets/knowus/021de4da-98f0-497b-98e8-162ee45849c2-marshall-emberton-cream-pos-01.png"
                  ></h4>
                <h4><strong><span style="background-color: #000000; color: #ffffff;">&nbsp;Emberton&nbsp;</span>&nbsp;</strong><strong>&nbsp;Cream 奶油白</strong></h4>
                <p><strong>跟著 Emberton Cream 主宰搖滾年代。<br>無可挑剔的外型，奶油白靈感取自放浪不羈的頹廢搖滾風，沒有其他顏色能夠將反叛精神以如此迷人的模樣呈現，不朽的復古色調，將 Rock 'N' Roll 黃金年代完美傳遞到你的手上，致敬超越半世紀經典。</strong></p>
                <p><strong>｜購買資訊｜<br>- 獨家通路：HOLA 指定門市<br>- 發售時間：4/16 (五)<br>- 陳列展示門市：<br>台北士林店、台北內湖店、桃園南崁店、新竹竹北店、台南仁德店、高雄夢時代店、高雄左營店<br>- 發售門市：<br>台北內湖店、台北士林店、台北中和店、台北土城店、台北新店店、台北新莊店、台北三峽店、桃園南崁店、桃園中壢店、桃園八德店、新竹竹北店、新竹二店、頭份中央店、台中北屯店、台中西屯店、台中大墩店、彰化和美店、嘉義店、台南永康店、台南仁德店、台南店、高雄左營店、高雄鳳山店、高雄夢時代店、屏東店、花蓮店、羅東店<br></strong></p>
                <p><span style="color: #800000;"><strong>※ 提醒：各門市數量有限，建議前往門市前先致電與門市人員確認現貨狀況，謝謝。</strong></span></p>
                <p><strong>查詢 HOLA 門市資訊：<br></strong><strong><a
                      href="https://www.trplus.com.tw/pages/store"
                      target="_blank"
                      rel="noopener"
                      style="text-decoration: none;"
                    >https://www.trplus.com.tw/pages/store</a></strong></p>
                <h4>&nbsp;</h4>
                <h4><img
                    src="~@/assets/knowus/71b934ac-f814-43ce-a695-cc88b3c07143-3.png"
                  ></h4>
                <h4><span style="background-color: #000000; color: #ffffff;"><strong>&nbsp;Emberton&nbsp;</strong></span><span style="color: #ffffff;"><strong>&nbsp;&nbsp;</strong></span><span style="color: #000000;"><strong>Forest 森林綠</strong></span></h4>
                <p><strong>帶上 Emberton Forest 遠離城市。</strong><br><strong>為探索者而生，渴望說走就走，帶上音樂短暫逃離世界，森林綠靈感取自擁抱山林，少了喧囂，沉浸在你創造的音樂世界。</strong></p>
                <p><strong>※ 4/12更新，全數完售。</strong></p>
                <hr>
                <p><strong>*各通路數量有限，售完為止。</strong></p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="row"
          id="threebtn"
          style="justify-content: center;"
        >
          <router-link
            :to="'/knowus/new3'"
            class="newsbtn"
          >上一則</router-link>
          <router-link
            :to="'/knowus/allnews'"
            class="newsbtn"
          >最新消息</router-link>
          <router-link
            :to="'/knowus/new5'"
            class="newsbtn"
          >下一則</router-link>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "New4",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/helpers/_newcontent";
</style>