import { StarIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CardBody from "@/components/card-body";

const HomePage = () => {
  return (
    <>
      <Card>
        <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
          <div className="space-y-1">
            <CardTitle>abhinishere/next-gallery-modal</CardTitle>
            <CardDescription>
              Component to add a WordPress-like gallery modal to your Next.js
              project.
            </CardDescription>
          </div>
          <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
            <Button variant="secondary" className="px-3 shadow-none">
              <a
                className="flex"
                href="https://github.com/abhinishere/next-gallery-modal"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <StarIcon className="mr-2 h-4 w-4" />
                Star repo
              </a>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <CardBody />
          {/* <Button className="mb-5">
          <PlusCircledIcon className="mr-2 h-4 w-4" />
          Select image
        </Button> */}
        </CardContent>
      </Card>
    </>
  );
};

export default HomePage;
