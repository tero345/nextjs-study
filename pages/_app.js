import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import Footer from '../src/component/layout/Footer'
import Top from '../src/component/layout/Top'

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ width: 1000, margin: "0 auto" }}>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp

/**
 * 페이지 전환 시 레이아웃을 유지할 수 있다
 * 페이지 전환 시 상태값을 유지할 수 있다.
 * componeneDidCatch를 이용해서 커스텀 에러 핸들링을 할 수 있다.
 * 추가적인 데이터를 페이지로 주입시켜줄수 있다
 * 글로벌 css를 이곳에 선언
 */
