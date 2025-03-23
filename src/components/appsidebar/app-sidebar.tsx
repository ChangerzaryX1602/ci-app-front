import Link from 'next/link'
import Image from 'next/image'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { SquarePen } from 'lucide-react';


// รอ fetch history จาก API
// ตัวอย่างข้อมูลที่จะได้รับ
const mockChats = [
  { id: '1', title: 'Chat with AI', url: '/chat/1' },
  { id: '2', title: 'Research Project', url: '/chat/2' },
  { id: '3', title: 'Coding Help', url: '/chat/3' },
  { id: '4', title: 'Next.js Discussion', url: '/chat/4' },
  { id: '5', title: 'Tech Interview Prep', url: '/chat/5' },
  { id: '6', title: 'UX/UI Design', url: '/chat/6' },
  { id: '7', title: 'Data Science', url: '/chat/7' },
  { id: '8', title: 'Machine Learning', url: '/chat/8' },
  { id: '9', title: 'Web Development', url: '/chat/9' },
  { id: '10', title: 'Mobile Development', url: '/chat/10' },
  { id: '11', title: 'Game Development', url: '/chat/11' },
  { id: '12', title: 'Cybersecurity', url: '/chat/12' },
  { id: '13', title: 'Cloud Computing', url: '/chat/13' },
  { id: '14', title: 'DevOps', url: '/chat/14' },
  { id: '15', title: 'Blockchain', url: '/chat/15' },
  { id: '16', title: 'AR/VR', url: '/chat/16' },
  { id: '17', title: 'Quantum Computing', url: '/chat/17' },
  { id: '18', title: 'Robotics', url: '/chat/18' },
  { id: '19', title: 'Digital Marketing', url: '/chat/19' },
  { id: '20', title: 'SEO', url: '/chat/20' },
  { id: '21', title: 'Social Media Marketing', url: '/chat/21' },
  { id: '22', title: 'Content Marketing', url: '/chat/22' },
  { id: '23', title: 'Email Marketing', url: '/chat/23' },
  { id: '24', title: 'Affiliate Marketing', url: '/chat/24' },
  { id: '25', title: 'Influencer Marketing', url: '/chat/25' },
  { id: '26', title: 'Growth Hacking', url: '/chat/26' },
  { id: '27', title: 'E-commerce', url: '/chat/27' },
];

export function AppSidebar() {
  return (
    <Sidebar >
      <SidebarHeader>
        <div><Link href={"/"}>Rag bot</Link></div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenuButton asChild>
            <a className="flex items-center space-x-2" href="/chat/new">
              <SquarePen />
              <span>New chat</span>
            </a>
          </SidebarMenuButton>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>History</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mockChats.map((mockChats) => (
                <SidebarMenuItem key={mockChats.id}>
                  <SidebarMenuButton asChild>
                    <a href={mockChats.url}>
                      <span>{mockChats.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <span className="flex items-center space-x-2 content-center">
          <Image src={'/images/kku-icon.png'} alt={'None'} width={50} height={50} />
          <Image src={'/images/enkku-logo.png'} alt={'None'} width={50} height={50} />
        </span>
      </SidebarFooter>
    </Sidebar>
  )
}
