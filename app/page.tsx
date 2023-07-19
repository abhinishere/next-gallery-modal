import { CircleIcon, StarIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CardBody from "@/components/card-body";
import getImages from "@/actions/get-images";

const HomePage = async () => {
  const images = await getImages();
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
            {/* <Separator orientation="vertical" className="h-[20px]" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" className="px-2 shadow-none">
                <ChevronDownIcon className="h-4 w-4 text-secondary-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              alignOffset={-5}
              className="w-[200px]"
              forceMount
            >
              <DropdownMenuLabel>Suggested Lists</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                Future Ideas
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>My Stack</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Inspiration</DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PlusIcon className="mr-2 h-4 w-4" /> Create List
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
          </div>
        </CardHeader>
        <CardContent>
          <CardBody images={images} />
          {/* <Button className="mb-5">
          <PlusCircledIcon className="mr-2 h-4 w-4" />
          Select image
        </Button> */}
          <div className="flex text-sm text-muted-foreground items-center space-x-4">
            <div className="flex items-center">
              <CircleIcon className="mr-1 h-3 w-3 fill-red-400 text-red-400" />
              Nextjs
            </div>
            <div className="flex items-center">
              <CircleIcon className="mr-1 h-3 w-3 fill-green-400 text-green-400" />
              TypeScript
            </div>
            <div className="flex items-center">
              <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
              Tailwind
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default HomePage;
