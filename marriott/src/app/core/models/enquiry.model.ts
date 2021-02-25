export interface Enquiry {
  _id?: string;
  name: string;
  email: string;
  nickName: string;
  phone: string;
  subject: string;
  message: string;
  filePath?: string;
  submitTime: string;
  expand: boolean;
  disabled?: boolean;
}
