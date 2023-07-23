"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { ImageType } from "@/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface AttachmentDetailsProps {
  image: ImageType;
}

const AttachmentDetails: React.FC<AttachmentDetailsProps> = ({ image }) => {
  const router = useRouter();
  const supabase = useSupabaseClient();
  const deleteThisImage = async () => {
    const { error } = await supabase
      .from("images")
      .delete()
      .eq("image_path", image.image_path);
    if (error) {
      toast.error("Failed deleting from DB.");
      console.log(error.message);
    } else {
      toast.success("Image deleted from DB.");
      // also delete from storage ☝️
      const { data: storageData, error: storageError } = await supabase.storage
        .from("images")
        .remove([image.image_path]);
      if (storageError) {
        console.log(storageError);
        toast.error("Failed deleting from storage bucket.");
      }
      if (storageData) {
        toast.success("Deleted from storage as well.");
      }
    }
    router.refresh();
  };

  const updateTitle = async (text: string) => {
    const { error } = await supabase
      .from("images")
      .update({ title: text })
      .eq("image_path", image.image_path);
    if (error) {
      toast.error("Updation failed");
      console.log(error.message);
    }
    router.refresh();
  };
  const updateAlt = async (text: string) => {
    const { error } = await supabase
      .from("images")
      .update({ alt: text })
      .eq("image_path", image.image_path);
    if (error) {
      toast.error("Updation failed");
      console.log(error.message);
    }
    router.refresh();
  };
  const updateDescription = async (text: string) => {
    const { error } = await supabase
      .from("images")
      .update({ description: text })
      .eq("image_path", image.image_path);
    if (error) {
      toast.error("Updation failed");
      console.log(error.message);
    }
    router.refresh();
  };
  const updateCaption = async (text: string) => {
    const { error } = await supabase
      .from("images")
      .update({ caption: text })
      .eq("image_path", image.image_path);
    if (error) {
      toast.error("Updation failed");
      console.log(error.message);
    }
    router.refresh();
  };
  return (
    <Card className="overflow-y-auto">
      <CardHeader>
        <CardTitle>Attachment Details</CardTitle>
        {/* <CardDescription>
         Attachment details info
        </CardDescription> */}
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="space-y-2">
          <Image
            src={
              process.env.NEXT_PUBLIC_SUPABASE_URL +
              "/storage/v1/object/public/images/" +
              image.image_path
            }
            alt=""
            width={100}
            height={100}
          />
          <p className="text-muted-foreground">{image.image_path}</p>

          <div>
            <div
              onClick={deleteThisImage}
              className="text-sm text-red-500 underline underline-offset-4 hover:text-red-600 cursor-pointer"
            >
              Delete this permanently
            </div>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="title">Title</Label>
          <Input
            defaultValue={image.title}
            id="title"
            onChange={(e) => updateTitle(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="alt">Alt Text</Label>
          <Textarea
            defaultValue={image.alt}
            id="alt"
            onChange={(e) => updateAlt(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="caption">Caption</Label>
          <Textarea
            defaultValue={image.caption}
            id="caption"
            onChange={(e) => updateCaption(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            defaultValue={image.description}
            id="description"
            onChange={(e) => updateDescription(e.target.value)}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default AttachmentDetails;
