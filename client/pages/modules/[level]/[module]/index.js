export default function ModuleIndex() {
  return <></>
}

export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: context?.req?.path + "/1",
      permanent: false,
    },
  }

  return {
    props: {},
  }
}
