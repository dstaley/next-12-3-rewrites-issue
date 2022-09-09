export default function TemplatePage({ pageSlug }: { pageSlug: string }) {
  return <h1>{pageSlug}</h1>
}

export function getStaticPaths() {
  return {
    paths: [{ params: { templatepage: 'terms-of-service' } }],
    fallback: 'blocking'
  }
}

export function getStaticProps({ params: { templatepage: pageSlug } }: { params: { templatepage: string }}) {
  return {
    props: {
      pageSlug,
    },
  }
}
