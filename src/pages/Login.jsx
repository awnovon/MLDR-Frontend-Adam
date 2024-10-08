import { useEffect } from "react";

export function Login() {
  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const redirectUrl = hashParams.get("state").split('|')[1];
    window.location.replace(`${redirectUrl}?${window.location.hash}`);

  },);

  return <div>LOGIN PAGE</div>;
};
