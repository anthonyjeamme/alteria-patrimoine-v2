import { TPageData } from "../core/Page/Page.types";

const API_PATH = `/api/data`;

/**
 *
 */
const getPublicPage = async (slug: string) => {
  return await fetch(`${API_PATH}/public/page?slug=${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

/**
 *
 */
const getPage = async (id: string): Promise<TPageData> => {
  return await fetch(`${API_PATH}/admin/page/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

/**
 *
 */
const listPages = async (): Promise<TPageData> => {
  return await fetch(`${API_PATH}/admin/page/pages`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

/**
 *
 */
const createPage = async (pageData: Partial<TPageData>) => {
  return await fetch(`${API_PATH}/admin/page`, {
    method: "POST",
    body: JSON.stringify(pageData),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

/**
 *
 */
const updatePage = async (id: string, pageData: Partial<TPageData>) => {
  return await fetch(`${API_PATH}/admin/page/${id}`, {
    method: "PUT",
    body: JSON.stringify(pageData),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

/**
 *
 */
const deletePage = async (id: string) => {
  await fetch(`${API_PATH}/admin/page/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const clientConnector = {
  getPublicPage,
  getPage,
  listPages,
  createPage,
  updatePage,
  deletePage,
};
