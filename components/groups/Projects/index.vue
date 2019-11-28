<template>
  <vue-title-container
    sub-title="Projects"
    title="프로젝트">
    <div>
      <vue-definition
        block
        sub-title="2019년 11월 - 현재"
        title="Empo"
        href="http://empoapp.com"
        src="/imgs/empo.ico">
        <div>
          엠포는 모바일 데이터 직거래 플랫폼입니다.<br><br>
          전 세계의 심각한 대역폭 공급 불균형을 해소하기 위해 글로벌 시장을 타겟으로 서비스 중입니다. 현재는 인도가 메인 타겟이고, 안드로이드 OS만 서비스 중입니다.<br><br>
          기존 PHP 언어로 개발되어있던 서버 코드를 Node.js로 변경하면서 데이터베이스 정규화 작업 및 마이그레이션을 진행하고 있습니다. 또한 서버 보안을 위한 AWS 인프라를 조금 더 탄탄히 구성했습니다.
        </div>
        <vue-tags :data="empo"/>
      </vue-definition>
      <vue-definition
        block
        sub-title="2019년 6월 - 7월"
        title="SoluM ESL Dashboard"
        src="/imgs/solum_logo.jpg">
        <div>
          (주)솔루엠의 하청 업체인 (주)디카모의 외주 프로젝트의 일원으로 참여했던 프로젝트입니다.<br><br>
          당시 API 서버는 개발이 완료되어있던 상황이었고, 편의점 혹은 마트 등에서 사용하는 종이로 된 상품 가격표를 전자 태그로 대체해서 웹사이트 Admin 페이지로 디스플레이를 조절하는 일종의 대시보드 페이지를 개발했습니다.<br><br>
          SEO가 필요없는 애플리케이션이므로 정적 페이지인 Vue.js로 개발해서 서버 비용 부담을 줄였습니다. (내부 보안 정책에 의해 프로젝트에 도메인 주소는 연결시키지 않았습니다.)
        </div>
        <vue-tags :data="dicamo"/>
      </vue-definition>
      <vue-definition
        :tags="gangmom"
        block
        sub-title="2018년 8월 - 2019년 3월"
        title="강남엄마"
        href="http://gangmom.kr"
        src="/imgs/gangmom_logo.png">
        <div>
          "학원 찾을 땐, 강남엄마"<br><br>
          전국의 사교육 시장을 타겟으로 멋쟁의사자처럼 해커톤 1등을 했던 프로젝트를 비즈니스화한 프로젝트입니다. 처음 풀스택 개발자로 합류했고 이후 PM 역할을 맡았습니다.<br><br>
          직접 참여했던 프로젝트는 총 3개입니다.<br>
          - www.gangmom.kr<br>
          - api.gangmom.kr<br>
          - admin.gangmom.kr<br>
        </div>
      </vue-definition>
      <vue-definition
        :tags="zerobase.factoryhunt"
        block
        sub-title="2017년 6월 - 2018년 6월"
        title="Factoryhunt"
        href="https://www.facebook.com/factoryhunt"
        src="/imgs/factoryhunt_logo.png">
        <div>
          "A hub of whoesale supplier listings. THE BEST way to showcase your business!"<br><br>
          중국 "alibaba.com"의 Pain Point를 해결하고자 기획했던 프로젝트입니다. 메인 유저는 중국을 제외한 전 세계의 공장들이 타겟이었고 1년 동안 전 세계 약 100곳의 공장을 가입시켰습니다.<br><br>
          이 프로젝트는 앱 보다는 반응형 웹사이트가 메인 타겟에게 익숙할 것으로 예상되어서 웹사이트로 개발했습니다.
        </div>
      </vue-definition>
      <vue-definition
        :tags="zerobase.picon"
        block
        sub-title="2017년 4월 - 6월"
        title="Picon"
        href="https://www.facebook.com/piconcontest"
        src="/imgs/picon_logo.png">
        <div>
          "Weekly Photo Contest"<br><br>
          이벤트성 애플리케이션이며 메인 컨셉은 매주 토요일 24시간 동안만 1인당 1개의 사진을 업로드할 수 있고, 이후 일요일부터 금요일까지 회원들이 투표해서 최다 득표를 한 1, 2, 3등에게 현금 보상을 해주는 서비스입니다.<br><br>
          이 프로젝트에서는 Swift를 사용해 App Store에만 배포했습니다. 총 3번 상금을 지급했었고 BM이 다소 약해 중단된 프로젝트입니다.
        </div>
      </vue-definition>
      <vue-definition
        :tags="zerobase.hoopee"
        block
        sub-title="2017년 2월 - 4월"
        title="Hoopee"
        href="https://www.facebook.com/hoopeeapp"
        src="/imgs/hoopee_logo.png">
        <div>
          "Simple Notification for Groups"라는 슬로건으로 진행했던 프로젝트입니다. 비슷한 서비스로는 지금의 "페이스북 페이지"와 "카카오톡 채널"입니다.<br><br>
          이 프로젝트를 하게 된 계기는 보통 어떠한 비즈니스 혹은 커뮤니티 등등 기본적으로 웹사이트가 필요하게 되는데 지금은 Mobile First 시대이기 때문에 무엇이든 일을 진행할 때 웹사이트와 모바일 웹사이트 (자칭 앱사이트)를 필요로 하게 될 거라고 생각했습니다.<br><br>
          이 프로젝트는 Zerobase Software가 Y Combinator Startup School을 수료할 수 있게 도와준 앱이어서 애착이 가는 프로젝트입니다. Startup School 진행 중 "Hoopee"를 그만두게 되었는데, 이유는 당시 카카오톡 채널 (당시 카카오톡 플러스친구)와 페이스북 페이지가 굉장히 활발하게 개발/서비스 중이어서 경쟁력에서 많이 밀린다고 판단되어 중단하게 되었습니다.<br><br>
          또한 기술적으로도 문제가 있었는데 "React Native"를 이용해 iOS와 Android를 모두 개발했지만 당시 라이브로 사용하기엔 너무 높은 러닝 커브 + 적은 레퍼런스 + 잦은 버그로 당장 상용화는 어려울 것 같아 중단했습니다.
        </div>
      </vue-definition>
      <vue-definition
        :tags="inactive.aManLikeFox"
        block
        sub-title="2016년 3월 - 11월"
        title="여우같은 그 남자"
        href="https://www.facebook.com/manlikefox"
        src="/imgs/a_man_like_fox_logo.png">
        <div>
          여성향 시뮬레이션 게임입니다. 총 20개의 메인 에피소드와 5개의 스페셜 엔딩을 구성했습니다.<br><br>
          메인 줄거리는 천 년을 살면 인간으로 환생하는 구미호 설정인 남자 주인공인 "여원"이 조선시대 인간 여자인 "연희"와 사랑에 빠지는 내용입니다. 불미스러운 사건으로 "연희"가 죽고 몇 백년 뒤 "여원"이 "연희"와 같은 외모로 다시 태어난 "신재"와 재회하는 스토리입니다.<br><br>
          당시 히트쳤던 게임 "일진에게 찍혔을 때"를 필두로 미연시를 장르가 유행해서 3달간 팀원들과 준비해서 런칭했습니다. 이 때 3만원을 Facebook 네이티브 광고비로 사용해서 광고 게시글 좋아요 100개 이상을 받았습니다. 이를 계기로 출시하자마자 인 앱 결제로 이루어져 수익을 발생시켰습니다.<br><br>
          인 앱 결제는 총 최초 4개의 "여우 구슬" 아이템이 주어지고 에피소드를 1개 진행하면 "여우 구슬"이 1개 차감되는 방식이었고, 하루마다 여우 구슬 2개가 지급됐습니다.
        </div>
      </vue-definition>
    </div>
  </vue-title-container>
</template>

<script>
	// containers
	import VueTitleContainer from '~/containers/Title'
	// units
	import VueDefinition from '~/components/units/Definition'
	import VueTags from '~/components/units/Tags'
	export default {
		components: {
			VueTitleContainer,
			VueDefinition,
			VueTags
		},
		data() {
			return {
				inactive: {
					aManLikeFox: ['iOS', 'Objective-C']
				},
				zerobase: {
					hoopee: ['iOS', 'Android', 'React Native', 'Firebase'],
					picon: ['iOS', 'Swift', 'Firebase'],
					factoryhunt: ['Vue.js', 'Node.js', 'MariaDB', 'AWS', 'ElasticSearch']
				},
				gangmom: ['Vue.js', 'Node.js', 'MySQL', 'AWS'],
				dicamo: ['Vue.js'],
				empo: ['Node.js', 'MySQL', 'AWS', 'Firebase']
			}
		}
	}
</script>