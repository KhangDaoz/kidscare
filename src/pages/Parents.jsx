
import { useState } from 'react';
import AlertBanner from '../components/parents/AlertBanner';
import ChildSelector from '../components/parents/ChildSelector';
import O2OMissions from '../components/parents/O2OMissions';
import ParentBottomNav from '../components/parents/ParentBottomNav';
import ParentSettings from '../components/parents/ParentSettings';
import ProgressChart from '../components/parents/ProgressChart';
import RadarChart from '../components/parents/RadarChart';
import WeeklyReport from '../components/parents/WeeklyReport';

export default function Parents() {
    // Mock data tĩnh theo yêu cầu.
    const children = [
        { id: 1, name: 'Bé An', age: 6, avatar: '🐶' },
        { id: 2, name: 'Bé Bình', age: 4, avatar: '🐱' },
    ];

    const radarData = {
        fireSafety: 85,
        strangerDanger: 45,
        accident: 92,
        firstAid: 78,
        independence: 88,
    };

    const criticalAlert = {
        hasAlert: true,
        skillName: 'mở cửa cho người lạ',
        message: 'Bé có nguy cơ cao mở cửa cho người lạ',
    };

    const weeklyReport = {
        totalScenarios: 24,
        accuracy: 76,
        accuracyChange: 8,
        avgReactionTime: 3.2,
        reactionChange: -0.5,
        weakestSkill: 'Từ chối người lạ',
        weakestPercent: 45,
        strongestSkill: 'Thoát hiểm khi cháy',
        strongestPercent: 94,
    };

    const missions = [
        {
            id: 'm1',
            title: 'Diễn tập thoát hiểm mini',
            description: 'Cùng bé tìm 2 lối thoát trong nhà trong 3 phút.',
            status: 'completed',
            actionLabel: 'Xem lại',
        },
        {
            id: 'm2',
            title: 'Mật khẩu gia đình',
            description: 'Tạo mật khẩu an toàn để bé xác minh khi có người lạ.',
            status: 'pending',
            actionLabel: 'Bắt đầu',
        },
        {
            id: 'm3',
            title: 'Gọi trợ giúp khẩn',
            description: 'Luyện nói to địa chỉ nhà và số điện thoại khẩn cấp.',
            status: 'pending',
            actionLabel: 'Bắt đầu',
        },
    ];

    const monthlyData = [
        { month: 'T1', strangerSafety: 42, fireSafety: 55 },
        { month: 'T2', strangerSafety: 45, fireSafety: 58 },
        { month: 'T3', strangerSafety: 49, fireSafety: 63 },
        { month: 'T4', strangerSafety: 52, fireSafety: 68 },
        { month: 'T5', strangerSafety: 58, fireSafety: 72 },
        { month: 'T6', strangerSafety: 63, fireSafety: 79 },
        { month: 'T7', strangerSafety: 69, fireSafety: 85 },
        { month: 'T8', strangerSafety: 74, fireSafety: 91 },
    ];

    const initialSettings = {
        screenTime: 30,
        notifications: {
            weeklyReport: true,
            criticalAlert: true,
            promotion: false,
        },
    };

    const [selectedChildId, setSelectedChildId] = useState(children[0].id);
    const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
    const [settings, setSettings] = useState(initialSettings);

    const selectedChild = children.find((child) => child.id === selectedChildId) ?? children[0];

    const handleAddChild = () => {
        window.alert('Tính năng thêm con sẽ sớm được mở.');
    };

    const handleSuggestMission = () => {
        window.alert('AI đang gợi ý nhiệm vụ mới phù hợp với bé.');
    };

    const handleScreenTimeChange = (nextValue) => {
        setSettings((prev) => ({
            ...prev,
            screenTime: nextValue,
        }));
    };

    const handleToggleNotification = (key) => {
        setSettings((prev) => ({
            ...prev,
            notifications: {
                ...prev.notifications,
                [key]: !prev.notifications[key],
            },
        }));
    };

    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-sky-50 via-slate-50 to-white px-4 pb-24 pt-6 md:px-8 lg:px-10">
                <div className="mx-auto max-w-7xl space-y-6">
                    <header className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-sky-100">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div>
                                <h1 className="text-2xl font-black text-slate-800">
                                    Xin chào phụ huynh của {selectedChild.name}
                                </h1>
                            </div>

                            <button
                                type="button"
                                className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm font-bold text-sky-700"
                            >
                                <span>🔔</span>
                                <span>Thông báo</span>
                            </button>
                        </div>
                    </header>

                    <ChildSelector
                        childrenList={children}
                        selectedChildId={selectedChildId}
                        onSelectChild={setSelectedChildId}
                        onAddChild={handleAddChild}
                    />

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        <div className="space-y-6">
                            <RadarChart data={radarData} />
                            <WeeklyReport reportData={weeklyReport} />
                            <ProgressChart monthlyData={monthlyData} />
                        </div>

                        <div className="space-y-6">
                            <AlertBanner
                                alertData={criticalAlert}
                                onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
                            />
                            <O2OMissions missions={missions} onSuggestMission={handleSuggestMission} />
                            <ParentSettings
                                settings={settings}
                                onScreenTimeChange={handleScreenTimeChange}
                                onToggleNotification={handleToggleNotification}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <ParentBottomNav />

            {isEmergencyModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4">
                    <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
                        <h2 className="text-xl font-black text-slate-800">Bài tập khẩn cấp</h2>
                        <p className="mt-2 text-sm font-semibold text-slate-600">
                            Cần luyện ngay kỹ năng: <span className="text-rose-600">{criticalAlert.skillName}</span>
                        </p>
                        <p className="mt-1 text-sm text-slate-600">{criticalAlert.message}</p>

                        <div className="mt-5 flex gap-3">
                            <button
                                type="button"
                                onClick={() => {
                                    window.alert('Đang mở bài tập khẩn cấp cho phụ huynh.');
                                    setIsEmergencyModalOpen(false);
                                }}
                                className="flex-1 rounded-xl bg-rose-600 px-4 py-2 text-sm font-extrabold text-white hover:bg-rose-700"
                            >
                                Bắt đầu ngay
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsEmergencyModalOpen(false)}
                                className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-extrabold text-slate-700 hover:bg-slate-50"
                            >
                                Để sau
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}