import Header from "../organisms/Header";

function DefaultTemplate(props) {
  const { id, title, children } = props;

  return (
    <>
      <Header title={title} />
      <div id={id}>
        { children }
        <footer>
          footer~!
        </footer>
      </div>
    </>
  )
}

export default DefaultTemplate