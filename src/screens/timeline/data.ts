export interface WorkStatusType {
  status: 'WORKING' | 'STOPPED';
  title: string;
  website: string;
  date: string;
}

export const workstatus: WorkStatusType[] = [
  {
    status: 'WORKING',
    title: 'Notify Technology, Inc',
    website: 'https://notify.me',
    date: '2019 - April'
  },
];
