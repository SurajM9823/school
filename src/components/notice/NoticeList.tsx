import React from 'react';
import NoticeItem from './NoticeItem';

interface Notice {
  id: number;
  title: string;
  date: string;
  category: string;
  content: string;
  isImportant?: boolean;
}

const NoticeList: React.FC = () => {
  const notices: Notice[] = [
    {
      id: 1,
      title: 'Scholarship Test on 4th Baisakh',
      date: '2025-04-01',
      category: 'Examination',
      content: 'The scholarship test for all programs will be conducted on 4th Baisakh at 11:00 AM. All eligible students are encouraged to participate.',
      isImportant: true,
    },
    {
      id: 2,
      title: 'Classes Starting from 7th Baisakh',
      date: '2025-04-02',
      category: 'Academic',
      content: 'All bridge courses and entrance preparation classes will commence from 7th Baisakh. Students are requested to complete their admission process before the start date.',
      isImportant: true,
    },
    {
      id: 3,
      title: 'Orientation Program Schedule',
      date: '2025-04-05',
      category: 'Event',
      content: 'Orientation program for new students will be held on 6th Baisakh at the college auditorium. Attendance is mandatory for all newly admitted students.',
    },
    {
      id: 4,
      title: 'Lab Equipment Demonstration',
      date: '2025-04-08',
      category: 'Academic',
      content: 'A demonstration of new lab equipment for Science students will be conducted on 8th Baisakh. Interested students can register at the administration office.',
    },
  ];

  return (
    <div className="space-y-4">
      {notices.map((notice) => (
        <NoticeItem
          key={notice.id}
          title={notice.title}
          date={notice.date}
          category={notice.category}
          content={notice.content}
          isImportant={notice.isImportant}
        />
      ))}
    </div>
  );
};

export default NoticeList;