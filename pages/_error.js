function Error({ statusCode }) {
    return (
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    )
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default Error


  /**
   * 이 페이지에서 모든 에러 처리
   * 404 는 별도의 페이지에서 처리해주는게 좋다
   */