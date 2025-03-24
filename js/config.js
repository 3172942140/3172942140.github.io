const API_CONFIG = {
    BASE_URL: 'https://api.szhaovo.cn',
    ENDPOINTS: {
        // 认证相关
        LOGIN: '/api/auth/login',
        REGISTER: '/api/auth/register',
        
        // 文章相关
        POSTS: '/api/posts',
        ADMIN_POSTS: '/api/admin/posts',
        POST: (id) => `/api/posts/${id}`,
        
        // 用户相关
        USERS: '/api/users',
        UPDATE_USER_ROLE: (userId) => `/api/users/${userId}/role`,
        
        // 评论相关
        POST_COMMENTS: (postId) => `/api/posts/${postId}/comments`,
        ADMIN_COMMENTS: '/api/admin/comments',
        COMMENT: (id) => `/api/comments/${id}`,
        
        // 文件相关
        POST_FILES: (postId) => `/api/posts/${postId}/files`,
        ADMIN_FILES: '/api/admin/files',
        UPLOAD: '/api/upload',
        FILE: (id) => `/api/files/${id}`,
        UPDATE_FILE_POST: (fileId) => `/api/files/${fileId}/post`,
    },

    // 构建完整的 API URL
    getUrl(endpoint) {
        return this.BASE_URL + endpoint;
    }
}; 