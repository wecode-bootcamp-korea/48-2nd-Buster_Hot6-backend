WEBNB Project (wecode-project-AirBNB) backend

프로젝트 소개
오늘의 집를 참고하여 만든 인테리어 제품 구매사이트입니다. 유저가 쉽게 서비스에 접근할 수 있는 것에 대한 고민을 했고 로그인 및 회원가입에 대한 절차를 필수정보만 담아서 회원가입을 하게 만들었습니다, 메인페이지는 제품에 따라 카테고리를 설정하여 보다 빠른 속도로 원하는 제품을 선택할수있게 만들었습니다

개발 기간
23.08.21 ~ 23.09.01

멤버 구성(48-Default-backend)

김창현 : 리뷰CRUD, 주문하기, 커뮤니티 게시글 리스트, (게시글,상품) 스크랩

김시연 : ERD모델링, 장바구니 리스트, 장바구니 삭제, 장바구니 담기, 게시글 상세

김만규 : ERD모델링, 로그인, 회원가입, 결제 API, 제품 리스트 

최홍 : 스크랩 카운팅, 제품 스크랩 카운팅

개발 환경
javascript
node.js
Framework : express.js
Database : mySQL
ORM : TypeORM

주요 기능
회원가입
nickname, email, password로 database에 저장
bycrpt로 password 암호화
email을 중복으로 가입하지 못하게 기능 구현

로그인
email, password 값으로 일치하는 회원정보 제공
로그인 성공시 JWT발급

메인 페이지
로그인 성공시 클라이언트가 바로 요청을 하여 제품리스트를 GET메서드 사용
/category/:categoryId 를 이용하여 카테고리 및 필터로 특정 조건 설정

상세정보 페이지
클라이언트에서 userId값을 받아와 

스크랩
클라이언트에서 userId,productId값을 받아와 갯수 카운팅 기능 구현


결제페이지
특정 User의 토큰값을 받아 ID를 복호화 후 해당 User의 정보를 가져와 결제를 가능하게 하는 페이지 구현
방의 정보와 예약 정보는 querystring으로 받아 정보 제공
임의의 point값을 지정하여 총 price의 대한 값과의 연산으로 결제방식 진행

