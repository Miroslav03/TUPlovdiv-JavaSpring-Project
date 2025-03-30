package com.example.server.constants;

public class Paths {

    public static class Clients {
        public static final String REGISTER = "/register";
        public static final String GET_ONE = "/profile/{id}";
        public static final String GET_ALL = "/all";
        public static final String GET_ALL_CATEGORY = "/all/{category}";
    }

    public static class Freelancers {
        public static final String REGISTER = "/register";
        public static final String GET_ONE = "/profile/{id}";
        public static final String GET_ALL = "/all";
        public static final String GET_ALL_CATEGORY = "/all/{category}";
    }

    public static class Users {
        public static final String LOGIN = "/login";
        public static final String LOGOUT = "/logout";
        public static final String GET_ONE = "/profile/{id}";
        public static final String DESCRIPTION_ADD = "/description/add/{id}";
        public static final String DESCRIPTION_EDIT = "/description/edit/{id}";
    }

    public static class Offers {
        public static final String ALL = "/all";
        public static final String ALL_CATEGORY = "/all/{category}";
        public static final String CREATE = "/create";
        public static final String GET_ONE = "/{id}";
        public static final String DELETE = "/delete/{id}";
        public static final String EDIT = "/edit/{id}";
        public static final String SEND = "/send";
        public static final String APPLY = "/apply";
        public static final String DECLINE = "/decline";
    }
}
