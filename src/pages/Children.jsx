import React, { useState } from 'react';
import ChildrenNav from '../components/layout/ChildrenNav';
import ChildrenBottomNav from '../components/layout/ChildrenBottomNav';
import FloatingHUD from '../components/common/FloatingHUD';
import MapCanvas from '../components/map/MapCanvas';
import LessonPlayer from '../components/player/LessonPlayer';

export default function Children() {
    const [selectedLessonId, setSelectedLessonId] = useState(null);

    const handleLessonSelect = (lessonId) => {
        setSelectedLessonId(lessonId);
    };

    const handleBackToMap = () => {
        setSelectedLessonId(null);
    };

    return (
        <div className="bg-[#E3F2FD] min-h-screen font-body text-on-surface overflow-x-hidden relative">
            <ChildrenNav />
            <FloatingHUD stars={1250} diamonds={45} />
            
            {/* Hiển thị LessonPlayer nếu có bài học được chọn */}
            {selectedLessonId ? (
                <LessonPlayer 
                    lessonId={selectedLessonId} 
                    onBackToMap={handleBackToMap}
                />
            ) : (
                <>
                    {/* Hiển thị Bản đồ nếu KHÔNG có bài học nào được chọn */}
                    <MapCanvas onLessonSelect={handleLessonSelect} />
                    <ChildrenBottomNav />
                </>
            )}
        </div>
    )
}