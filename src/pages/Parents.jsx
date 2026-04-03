
import { useState } from 'react';
import ParentActionAdvisor from '../components/parents/ParentActionAdvisor';
import ParentHeader from '../components/parents/ParentHeader';
import ParentQrModal from '../components/parents/ParentQrModal';
import ParentTasksPanel from '../components/parents/ParentTasksPanel';
import ParentsPerformanceCharts from '../components/parents/ParentsPerformanceCharts';
import InsightSummaryCard from '../components/parents/InsightSummaryCard';

const initialTasks = {
    app: [
        {
            id: 1,
            title: 'Học bài: Kẻ lạ ở siêu thị',
            desc: 'Hoàn thành cấp độ 2 để nhận Badge.',
            tag: 'AI Đề xuất',
            checked: false,
        },
        {
            id: 2,
            title: 'Mini-game: Nhận diện lối thoát',
            desc: 'Luyện phản xạ dưới 3 giây.',
            tag: 'Lộ trình',
            checked: true,
        },
    ],
    real: [
        {
            id: 3,
            title: 'Diễn tập mật khẩu gia đình',
            desc: 'Thử thách: Mẹ đóng vai người lạ đón bé.',
            tag: 'O2O',
            checked: false,
            qr: true,
        },
        {
            id: 4,
            title: 'Tự dọn dẹp đồ chơi',
            desc: 'Bé tự giác xếp gọn sau khi học xong.',
            tag: 'Ba mẹ',
            checked: false,
        },
    ],
};

export default function Parents() {
    const [activeChild, setActiveChild] = useState('an');
    const [activeTab, setActiveTab] = useState('app');
    const [tasksByTab, setTasksByTab] = useState(initialTasks);
    const [manualTask, setManualTask] = useState('');
    const [isQrModalOpen, setQrModalOpen] = useState(false);

    const activeTasks = tasksByTab[activeTab];

    const handleManualTaskAdd = () => {
        const title = manualTask.trim();
        if (!title) {
            return;
        }

        const newTask = {
            id: Date.now(),
            title,
            desc: 'Nhiệm vụ vừa được thêm thủ công bởi ba mẹ.',
            tag: 'Ba mẹ',
            checked: false,
        };

        setTasksByTab((prev) => ({
            ...prev,
            [activeTab]: [newTask, ...prev[activeTab]],
        }));
        setManualTask('');
    };

    const handleTaskToggle = (taskId, checked) => {
        setTasksByTab((prev) => ({
            ...prev,
            [activeTab]: prev[activeTab].map((task) =>
                task.id === taskId ? { ...task, checked } : task,
            ),
        }));
    };

    return (
        <div className="min-h-screen bg-slate-100 pb-12">
            <main className="mx-auto max-w-[1400px] space-y-6 px-3 pt-3 sm:px-4 sm:pt-4 md:px-6 md:pt-6">
                <ParentHeader activeChild={activeChild} onSelectChild={setActiveChild} />

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                    <div className="space-y-6 lg:col-span-8">
                        <InsightSummaryCard />
                        <ParentsPerformanceCharts />
                    </div>

                    <div className="space-y-6 lg:col-span-4">
                        <ParentActionAdvisor />
                        <ParentTasksPanel
                            activeTab={activeTab}
                            onTabChange={setActiveTab}
                            tasks={activeTasks}
                            manualTask={manualTask}
                            onManualTaskChange={setManualTask}
                            onManualTaskAdd={handleManualTaskAdd}
                            onTaskToggle={handleTaskToggle}
                            onOpenQr={() => setQrModalOpen(true)}
                        />
                    </div>
                </div>
            </main>

            <ParentQrModal isOpen={isQrModalOpen} onClose={() => setQrModalOpen(false)} />
        </div>
    );
}