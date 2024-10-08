PGDMP                      |         	   fit_today    16.3 (Debian 16.3-1.pgdg120+1)    16.0 $    ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            @           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            A           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            B           1262    65536 	   fit_today    DATABASE     t   CREATE DATABASE fit_today WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';
    DROP DATABASE fit_today;
                postgres    false            �            1259    81945 	   schedules    TABLE     �   CREATE TABLE public.schedules (
    id bigint NOT NULL,
    start_date character varying(255),
    user_id bigint,
    workout_id bigint,
    state_id integer
);
    DROP TABLE public.schedules;
       public         heap    postgres    false            �            1259    81921    states    TABLE     Y   CREATE TABLE public.states (
    id integer NOT NULL,
    name character varying(255)
);
    DROP TABLE public.states;
       public         heap    postgres    false            �            1259    65538    users    TABLE       CREATE TABLE public.users (
    id bigint NOT NULL,
    username character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    firstname character varying(255),
    lastname character varying(255),
    surename character varying(255)
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    73729    workouts    TABLE     �   CREATE TABLE public.workouts (
    id bigint NOT NULL,
    title character varying(255),
    trainer character varying(255),
    duration character varying(255)
);
    DROP TABLE public.workouts;
       public         heap    postgres    false            �            1259    81970    schedule_details    VIEW     j  CREATE VIEW public.schedule_details AS
 SELECT s.id,
    s.start_date,
    u.username AS user_name,
    w.title AS workout_title,
    w.trainer,
    st.name AS state_name
   FROM (((public.schedules s
     JOIN public.users u ON ((s.user_id = u.id)))
     JOIN public.workouts w ON ((s.workout_id = w.id)))
     JOIN public.states st ON ((s.state_id = st.id)));
 #   DROP VIEW public.schedule_details;
       public          postgres    false    218    222    220    220    218    218    216    216    222    222    222    222            �            1259    81944    schedules_id_seq    SEQUENCE     y   CREATE SEQUENCE public.schedules_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.schedules_id_seq;
       public          postgres    false    222            C           0    0    schedules_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.schedules_id_seq OWNED BY public.schedules.id;
          public          postgres    false    221            �            1259    81920    states_id_seq    SEQUENCE     �   CREATE SEQUENCE public.states_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.states_id_seq;
       public          postgres    false    220            D           0    0    states_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.states_id_seq OWNED BY public.states.id;
          public          postgres    false    219            �            1259    65537    users_id_seq    SEQUENCE     u   CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    216            E           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    215            �            1259    73728    workouts_id_seq    SEQUENCE     x   CREATE SEQUENCE public.workouts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.workouts_id_seq;
       public          postgres    false    218            F           0    0    workouts_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.workouts_id_seq OWNED BY public.workouts.id;
          public          postgres    false    217            �           2604    81948    schedules id    DEFAULT     l   ALTER TABLE ONLY public.schedules ALTER COLUMN id SET DEFAULT nextval('public.schedules_id_seq'::regclass);
 ;   ALTER TABLE public.schedules ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    222    222            �           2604    81924 	   states id    DEFAULT     f   ALTER TABLE ONLY public.states ALTER COLUMN id SET DEFAULT nextval('public.states_id_seq'::regclass);
 8   ALTER TABLE public.states ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219    220            �           2604    65541    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            �           2604    73732    workouts id    DEFAULT     j   ALTER TABLE ONLY public.workouts ALTER COLUMN id SET DEFAULT nextval('public.workouts_id_seq'::regclass);
 :   ALTER TABLE public.workouts ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            <          0    81945 	   schedules 
   TABLE DATA           R   COPY public.schedules (id, start_date, user_id, workout_id, state_id) FROM stdin;
    public          postgres    false    222   �'       :          0    81921    states 
   TABLE DATA           *   COPY public.states (id, name) FROM stdin;
    public          postgres    false    220   p(       6          0    65538    users 
   TABLE DATA           V   COPY public.users (id, username, password, firstname, lastname, surename) FROM stdin;
    public          postgres    false    216   �(       8          0    73729    workouts 
   TABLE DATA           @   COPY public.workouts (id, title, trainer, duration) FROM stdin;
    public          postgres    false    218   �(       G           0    0    schedules_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.schedules_id_seq', 65, true);
          public          postgres    false    221            H           0    0    states_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.states_id_seq', 3, true);
          public          postgres    false    219            I           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 3, true);
          public          postgres    false    215            J           0    0    workouts_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.workouts_id_seq', 15, true);
          public          postgres    false    217            �           2606    81950    schedules schedules_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.schedules DROP CONSTRAINT schedules_pkey;
       public            postgres    false    222            �           2606    81943    states states_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.states
    ADD CONSTRAINT states_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.states DROP CONSTRAINT states_pkey;
       public            postgres    false    220            �           2606    65545    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    216            �           2606    73736    workouts workouts_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.workouts
    ADD CONSTRAINT workouts_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.workouts DROP CONSTRAINT workouts_pkey;
       public            postgres    false    218            �           2606    81961 !   schedules schedules_state_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_state_id_fkey FOREIGN KEY (state_id) REFERENCES public.states(id);
 K   ALTER TABLE ONLY public.schedules DROP CONSTRAINT schedules_state_id_fkey;
       public          postgres    false    3231    222    220            �           2606    81951     schedules schedules_user_id_fkey    FK CONSTRAINT        ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);
 J   ALTER TABLE ONLY public.schedules DROP CONSTRAINT schedules_user_id_fkey;
       public          postgres    false    216    3227    222            �           2606    81956 #   schedules schedules_workout_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_workout_id_fkey FOREIGN KEY (workout_id) REFERENCES public.workouts(id);
 M   ALTER TABLE ONLY public.schedules DROP CONSTRAINT schedules_workout_id_fkey;
       public          postgres    false    3229    218    222            <   �   x�u��!��*R@��?6�%��Zq�-�#�x��Z�w��k�w�5pH�Dr�I>%�^�Q#����R$�+��(�υl!���aQ~>Z�R�(�И���+�/ �o��ů<�1�1����q�y0�=��u^��"��y��<�Fu�k ���e��      :   <   x�3�0�®�Mv\�ta�}\F���{.lr����9/L��}a��}v�c���� �0%l      6   .   x�3�LL��̃�&\�raυ�bgrs^�ta
��b���� a�)�      8   �   x�}�KN1D�=��A>�&���D�"�P6Ad����g�+T݈�������_U����
4�!p�����X<#^��8;��fN8Ǖ���WUj��Y��=B�ÈdiXp*H���*{��>�5<����2�H�Yf�D8ݠ��[��;l�NC��_�a��d���#>*>҂q�a��d>���K�������&A�.4"��A��,�U"�R     