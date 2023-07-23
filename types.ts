export interface ImageType {
  id: string;
  created_at: string;
  user_id: string;
  author: string;
  title: string;
  image_path: string;
  alt: string;
  caption: string;
  description: string;
  status?: string;
}

export interface UserDetails {
  id: string;
  first_name: string;
  last_name: string;
  full_name?: string;
  avatar_url?: string;
}
