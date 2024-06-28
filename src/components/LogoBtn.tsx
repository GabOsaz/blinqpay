
import Image from 'next/image';
import { useRouter } from "next/navigation";

function LogoBtn() {
  return (
    <button type="button">
        <Image alt="airbnb" src="/airbnb.svg" width="90" height="90" />
      </button>
  )
}

export default LogoBtn;
