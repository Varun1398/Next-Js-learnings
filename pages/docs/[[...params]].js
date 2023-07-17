import { useRouter } from "next/router";

export default function Doc() {
  const router = useRouter();
  const { params = [] } = router.query;

  if (params.length === 1) {
    return <h1>Viewieng docs for {params[0]}</h1>;
  } else if (params.length === 2) {
    return (
      <h1>
        Viewieng docs for {params[0]} and {params[1]}
      </h1>
    );
  } else {
    return <h1>Docs homepage</h1>;
  }
}
