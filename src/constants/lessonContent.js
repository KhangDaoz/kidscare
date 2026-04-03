export const lessonsContent = {  
  l1: {
    id: 'l1',
    title: 'XỬ LÝ KHI BỊ LẠC',
    skillCode: 'lost_handling',
    maxScore: 60,
    scenes: {
      start: {
        sceneId: 'start',
        title: 'Tình huống: Bé bị lạc ở nơi công cộng',
        videoUrl: '/videos/lost_handling/0.mp4',
        type: 'decision',
        question: 'Khi nhận ra mình đã bị lạc mất mẹ ở nơi đông người, cậu sẽ làm gì đầu tiên?',
        choices: [
          {
            id: 'choice_1',
            text: 'Khóc và chạy đi tìm mẹ',
            nextSceneId: 'lost_wrong_1',
            points: 0,
            isSafe: false
          },
          {
            id: 'choice_2',
            text: 'Đứng im tại chỗ chờ mẹ',
            nextSceneId: 'lost_step_2',
            points: 10,
            isSafe: true
          }
        ]
      },
      lost_step_2: {
        sceneId: 'lost_step_2',
        title: 'Gặp người lạ tiếp cận',
        videoUrl: '/videos/lost_handling/1.2.mp4',
        type: 'decision',
        question: 'Có một người lạ đến bảo sẽ dẫn cậu đi tìm mẹ. Cậu sẽ làm gì?',
        choices: [
          {
            id: 'choice_2_1',
            text: 'Đi theo người lạ đó',
            nextSceneId: 'lost_wrong_2',
            points: 0,
            isSafe: false
          },
          {
            id: 'choice_2_2',
            text: 'Lùi lại và từ chối đi cùng',
            nextSceneId: 'lost_step_3',
            points: 10,
            isSafe: true
          }
        ]
      },
      lost_step_3: {
        sceneId: 'lost_step_3',
        title: 'Tìm sự trợ giúp',
        videoUrl: '/videos/lost_handling/2.2.mp4',
        type: 'decision',
        question: 'Cậu cần tìm người giúp đỡ để gọi cho mẹ. Cậu nên hỏi ai?',
        choices: [
          {
            id: 'choice_3_1',
            text: 'Hỏi một người bất kỳ trên đường',
            nextSceneId: 'lost_caution',
            points: 0,
            isSafe: false
          },
          {
            id: 'choice_3_2',
            text: 'Tìm người mặc đồng phục (bảo vệ, nhân viên)',
            nextSceneId: 'lost_step_4',
            points: 10,
            isSafe: true
          }
        ]
      },
      lost_wrong_1: {
        sceneId: 'lost_wrong_1',
        title: 'Kết quả - Nguy hiểm!',
        videoUrl: '/videos/lost_handling/1.1.mp4',
        type: 'message',
        message: 'Lựa chọn này không an toàn!\n\nViệc chạy lung tung khi bị lạc sẽ khiến mẹ càng khó tìm thấy cậu hơn và dễ gặp nguy hiểm.',
        feedback: 'Hãy bình tĩnh và đứng im tại chỗ để mẹ dễ dàng tìm thấy cậu nhé!',
        nextSceneId: 'start',
        points: 0
      },
      lost_wrong_2: {
        sceneId: 'lost_wrong_2',
        title: 'Kết quả - Nguy hiểm!',
        videoUrl: '/videos/lost_handling/2.1.mp4',
        type: 'message',
        message: 'Rất nguy hiểm!\n\nĐi theo người lạ có thể dẫn đến những tình huống xấu như bị bắt cóc hoặc lạc vào nơi nguy hiểm.',
        feedback: 'Hãy luôn từ chối đi theo người lạ và tìm đến những người đáng tin cậy như chú bảo vệ hoặc cô nhân viên có mặc đồng phục nhé!',
        nextSceneId: 'lost_step_2',
        points: 0
      },
      lost_caution: {
        sceneId: 'lost_caution',
        title: 'Kết quả - Cần cẩn thận!',
        videoUrl: '/videos/lost_handling/3.1.mp4',
        type: 'message',
        message: 'Hỏi người bất kỳ có thể giúp ích, nhưng cũng tiềm ẩn rủi ro.',
        feedback: 'Tốt nhất cậu nên tìm đến những người đáng tin cậy như chú bảo vệ hoặc cô nhân viên có mặc đồng phục.',
        nextSceneId: 'lost_step_3',
        points: 0
      },
      lost_step_4: {
        sceneId: 'lost_step_4',
        title: 'Cung cấp thông tin liên lạc',
        videoUrl: '/videos/lost_handling/3.2.mp4',
        type: 'decision',
        question: 'Chú bảo vệ hỏi số điện thoại của mẹ cậu. Cậu có nhớ không?',
        choices: [
          {
            id: 'choice_4_1',
            text: 'Có, cháu nhớ số điện thoại của mẹ',
            nextSceneId: 'lost_step_5',
            points: 20,
            isSafe: true
          },
          {
            id: 'choice_4_2',
            text: 'Cháu không nhớ số điện thoại ạ',
            nextSceneId: 'lost_wrong_3',
            points: 0,
            isSafe: false
          }
        ]
      },
      lost_wrong_3: {
        sceneId: 'lost_wrong_3',
        title: 'Kết quả - Cần ghi nhớ!',
        videoUrl: '/videos/lost_handling/4.2.mp4',
        type: 'message',
        message: 'Việc không nhớ số điện thoại người thân sẽ khiến việc giúp đỡ gặp khó khăn.',
        feedback: 'Cậu hãy cố gắng học thuộc số điện thoại của cha mẹ để sử dụng trong những lúc cần thiết nhé!',
        nextSceneId: 'lost_step_4',
        points: 0
      },
      lost_step_5: {
        sceneId: 'lost_step_5',
        title: 'Thử thách cuối cùng: Chờ đợi',
        videoUrl: '/videos/lost_handling/4.1.mp4',
        type: 'decision',
        question: 'Trong khi đợi mẹ đến, có một chú hề mời con đi xem xiếc ở quầy đằng kia. Con làm gì?',
        choices: [
          { 
            id: 'choice_5_1', 
            text: 'Đi theo chú hề xem xiếc cho vui', 
            nextSceneId: 'lost_wrong_4', 
            points: 0, 
            isSafe: false 
          },
          { 
            id: 'choice_5_2', 
            text: 'Ở lại quầy thu ngân đợi mẹ đến', 
            nextSceneId: 'lost_correct_final', 
            points: 10, 
            isSafe: true 
          }
        ] 
      },
      lost_correct_final: {
        sceneId: 'lost_correct_final',
        title: 'Chúc mừng con!',
        videoUrl: '/videos/lost_handling/5.2.mp4',
        type: 'message',
        message: '🎉 Tuyệt vời! Con đã kiên nhẫn ở lại vị trí an toàn và mẹ đã tìm thấy con rồi!',
        feedback: 'Nhớ nhé: Tuyệt đối không rời khỏi vị trí an toàn cho đến khi thấy mẹ!',
        nextSceneId: 'final',
        points: 0
      },
      lost_wrong_4: {
        sceneId: 'lost_wrong_4',
        title: 'Nguy hiểm quá!',
        videoUrl: '/videos/lost_handling/5.1.mp4',
        type: 'message',
        message: 'Rất nguy hiểm! Dù là chú hề hay bất kỳ ai, con cũng không được rời khỏi chỗ cũ khi mẹ chưa đến.',
        feedback: 'Nếu con đi theo chú hề, mẹ sẽ đến quầy thu ngân mà không thấy con đâu đấy!',
        nextSceneId: 'lost_step_5',
        points: 0
      },
      final: {
        sceneId: 'final',
        title: 'Kết thúc bài học',
        type: 'final',
        showScore: true
      }
    }
  }
};