'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { createBlogPost, updateBlogPost, BlogState } from '@/app/actions/blog';
import { Save, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

interface BlogFormProps {
  post?: {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    image: string | null;
    published: boolean;
  };
}

function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <Save className="h-4 w-4 mr-2" />
      {pending ? 'Kaydediliyor...' : 'Kaydet'}
    </button>
  );
}

export default function BlogForm({ post }: BlogFormProps) {
  const initialState: BlogState = { message: '', errors: {} };
  
  // Bind the update action with the ID if editing, otherwise use create action
  const action = post 
    ? updateBlogPost.bind(null, post.id) 
    : createBlogPost;

  const [state, formAction] = useActionState(action, initialState);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link 
            href="/admin/blog-posts" 
            className="p-2 rounded-full hover:bg-gray-200 transition-colors text-gray-600"
          >
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {post ? 'Yazıyı Düzenle' : 'Yeni Blog Yazısı'}
            </h1>
            {post && (
              <p className="text-sm text-gray-500">/blog/{post.slug}</p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        {state.message && (
          <div className={`p-4 mb-6 rounded-md ${state.success === false ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
            {state.message}
          </div>
        )}

        <form action={formAction} className="space-y-6" encType="multipart/form-data">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Başlık
            </label>
            <input
              type="text"
              name="title"
              id="title"
              defaultValue={post?.title}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-2 border"
              placeholder="Örn: Tıkanıklık Açma Hizmetleri Hakkında Bilmeniz Gerekenler"
            />
            {state.errors?.title && (
              <p className="mt-1 text-sm text-red-600">{state.errors.title[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700">
              Özet (Kısa Açıklama)
            </label>
            <textarea
              name="excerpt"
              id="excerpt"
              rows={3}
              defaultValue={post?.excerpt}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-2 border"
              placeholder="Blog listesinde görünecek kısa açıklama..."
            />
            {state.errors?.excerpt && (
              <p className="mt-1 text-sm text-red-600">{state.errors.excerpt[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Kapak Görseli (Opsiyonel)
            </label>
            <div className="mt-1 flex items-center space-x-4">
              <div className="flex-1">
                <div className="flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                    <ImageIcon className="h-4 w-4" />
                  </span>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border-gray-300 focus:ring-orange-500 focus:border-orange-500 sm:text-sm border"
                  />
                </div>
                {state.errors?.image && (
                  <p className="mt-1 text-sm text-red-600">{state.errors.image[0]}</p>
                )}
              </div>
              {post?.image && (
                <div className="w-24 h-16 rounded-md overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
              İçerik
            </label>
            <textarea
              name="content"
              id="content"
              rows={15}
              defaultValue={post?.content}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-2 border font-mono"
              placeholder="# Markdown formatında içerik..."
            />
            <p className="mt-2 text-sm text-gray-500">
              İçerik Markdown formatını destekler. Başlıklar için #, listeler için - kullanabilirsiniz.
            </p>
            {state.errors?.content && (
              <p className="mt-1 text-sm text-red-600">{state.errors.content[0]}</p>
            )}
          </div>

          <div className="relative flex items-start">
            <div className="flex items-center h-5">
              <input
                id="published"
                name="published"
                type="checkbox"
                defaultChecked={post?.published}
                className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="published" className="font-medium text-gray-700">
                Yayınla
              </label>
              <p className="text-gray-500">İşaretlenirse yazı sitede görünür olacaktır.</p>
            </div>
          </div>

          <div className="flex justify-end pt-5">
            <Link
              href="/admin/blog-posts"
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 mr-3"
            >
              İptal
            </Link>
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
}
