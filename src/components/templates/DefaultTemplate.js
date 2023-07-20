import Header from "../organisms/Header";

function DefaultTemplate(props) {

  const { id, title, children } = props;

  return <div id={id}>
    <Header title={title} />
    { children }
    <footer>
      footer~!
    </footer>
  </div>
}

export default DefaultTemplate