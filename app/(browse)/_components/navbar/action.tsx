import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, currentUser } from "@clerk/nextjs";
import { Clapperboard } from "lucide-react";
import Link from "next/link";

const Action = async () => {
    const user = await currentUser()
    return ( 
        <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
            {!user && (
                <SignInButton>
                    <Button variant={"primary"} size={"sm"}>
                        Login
                    </Button>
                </SignInButton>
            )}
            {!!user && (
                <div className="flex items-center gap-x-4">
                    <Button asChild className="text-muted-foreground hover:text-primary" variant={"ghost"}>
                        <Link href={`/u/${user.username}`}>
                            <Clapperboard className="h-4 w-4 lg:mr-2" />
                            <span className="hidden lg:block">
                                Dashboard
                            </span>
                        </Link>
                    </Button>
                    <UserButton afterSignOutUrl="/" />
                </div>
            )}
        </div>
     );
}
 
export default Action;