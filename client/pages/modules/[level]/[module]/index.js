export default function ModuleIndex() {
  return <></>
}

export async function getServerSideProps(context) {
  const { level, module } = context.params

  // TODO recall where user left off!
  let step = 1

  return {
    redirect: {
      destination: "/" + ["modules", level, module, step].map((c) => encodeURIComponent(c)).join("/"),
      permanent: false,
    },
  }
}
