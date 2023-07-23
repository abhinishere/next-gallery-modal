import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import UploadModal from "./modals/upload-modal";
import { cookies } from "next/headers";

export const revalidate = 0;

export default async function Realtime() {
  console.log("getting initial values");
  const supabaseClient = createServerComponentClient({ cookies: cookies });
  const { data, error } = await supabaseClient
    .from("images")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    console.log(error.message);
  }
  return <UploadModal serverImages={data} />;
}
