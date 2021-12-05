export default function ModuleIndex() {
  return <></>
}

export async function getServerSideProps(context) {
  const { level, module } = context.params

  // TODO recall where user left off!
  let step = 1

  return {
    redirect: {
      destination: ["modules", level, module, step].join((c) => encodeURIComponent(c)),
      permanent: false,
    },
  }
}
