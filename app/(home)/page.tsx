import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

function PageHome() {
  return (
    <div>
      <Link
        href="/dashboard"
        className={cn(
          buttonVariants({
            variant: "default",
            size: "sm",
          })
        )}
      >
        工作台
      </Link>
    </div>
  );
}

export default PageHome;
