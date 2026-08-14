import { useEffect, useState } from "react";

import {
  getCourses,
  getSummary,
  exportCourses,
  importCourses,
  addLesson,
  deleteLesson,
  updateLesson,
  updateModule,
  reorderLessons,
} from "../services/course.service";

import { AddLessonModal } from "../components/AddLessonModal";
import { EditLessonModal } from "../components/EditLessonModal";

interface ModuleDraft {
  id: string;
  title: string;
  description: string;
}

export function CourseManagementPage() {
  const [courses, setCourses] = useState<any[]>([]);
  const [summary, setSummary] = useState({ moduleCount: 0, lessonCount: 0 });
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedModule, setSelectedModule] = useState("");
  const [selectedLesson, setSelectedLesson] = useState<any>(null);
  const [editingModule, setEditingModule] = useState<ModuleDraft | null>(null);
  const [importJson, setImportJson] = useState("");

  function loadCourses() {
    setCourses(getCourses());
    setSummary(getSummary());
  }

  useEffect(() => {
    loadCourses();
  }, []);

  function openAddLesson(moduleId: string) {
    setSelectedModule(moduleId);
    setShowAddModal(true);
  }

  function handleAddLesson(lesson: any) {
    addLesson(selectedModule, lesson);
    loadCourses();
  }

  function openEditLesson(moduleId: string, lesson: any) {
    setSelectedModule(moduleId);
    setSelectedLesson(lesson);
    setShowEditModal(true);
  }

  function handleEditLesson(lesson: any) {
    updateLesson(selectedModule, lesson);
    loadCourses();
  }

  function handleDelete(moduleId: string, lessonId: string) {
    const confirmDelete = window.confirm("Delete this lesson?");

    if (!confirmDelete) {
      return;
    }

    deleteLesson(moduleId, lessonId);
    loadCourses();
  }

  function handleMoveLesson(moduleId: string, currentIndex: number, direction: "up" | "down") {
    const module = courses.find((item) => item.id === moduleId);

    if (!module) return;

    const lessonOrder = [...module.lessons.map((lesson: any) => lesson.id)];
    const [movedLessonId] = lessonOrder.splice(currentIndex, 1);

    if (!movedLessonId) return;

    const nextIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;
    if (nextIndex < 0 || nextIndex > lessonOrder.length) return;

    lessonOrder.splice(nextIndex, 0, movedLessonId);
    reorderLessons(moduleId, lessonOrder);
    loadCourses();
  }

  function saveModuleChanges(moduleId: string) {
    if (!editingModule) return;

    updateModule(moduleId, {
      id: moduleId,
      title: editingModule.title.trim() || "Untitled Module",
      description: editingModule.description.trim() || "No description yet.",
    });

    setEditingModule(null);
    loadCourses();
  }

  function handleExportCourseData() {
    const payload = exportCourses();
    setImportJson(payload);

    if (navigator.clipboard) {
      navigator.clipboard.writeText(payload).catch(() => undefined);
    }
  }

  function handleImportCourseData() {
    const payload = importJson.trim();

    if (!payload) {
      return;
    }

    try {
      importCourses(payload);
      setImportJson("");
      loadCourses();
    } catch (error) {
      console.error("Failed to import course data", error);
      window.alert("The course JSON is invalid. Please paste a valid export.");
    }
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Course Management</h1>
            <p className="mt-2 text-slate-400">Manage lessons, modules, and course content.</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleExportCourseData}
              className="rounded-lg border border-slate-700 px-4 py-2"
            >
              Export Data
            </button>
            <button
              onClick={handleImportCourseData}
              className="rounded-lg bg-orange-500 px-4 py-2 text-slate-950"
            >
              Import Data
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-sm text-slate-400">Modules</p>
            <p className="mt-2 text-3xl font-bold text-orange-400">{summary.moduleCount}</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-sm text-slate-400">Lessons</p>
            <p className="mt-2 text-3xl font-bold text-green-400">{summary.lessonCount}</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-sm text-slate-400">Demo mode</p>
            <p className="mt-2 text-xl font-semibold text-slate-200">Local storage</p>
          </div>
        </div>

        {importJson && (
          <div className="mt-6">
            <label className="mb-2 block text-sm text-slate-300">Paste exported JSON to import</label>
            <textarea
              value={importJson}
              onChange={(event) => setImportJson(event.target.value)}
              rows={8}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 font-mono text-sm text-slate-200"
            />
          </div>
        )}
      </div>

      {courses.map((module) => (
        <section key={module.id} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-orange-400">{module.title}</h2>
              <p className="mt-2 text-slate-400">{module.description}</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() =>
                  setEditingModule({
                    id: module.id,
                    title: module.title,
                    description: module.description,
                  })
                }
                className="rounded-lg border border-slate-700 px-4 py-2"
              >
                Edit Module
              </button>

              <button
                onClick={() => openAddLesson(module.id)}
                className="rounded-lg bg-orange-500 px-4 py-2 text-slate-950"
              >
                Add Lesson
              </button>
            </div>
          </div>

          {editingModule !== null && editingModule.id === module.id && (
            <div className="mt-4 rounded-xl border border-slate-700 bg-slate-950 p-4">
              <div className="space-y-3">
                <input
                  value={editingModule.title}
                  onChange={(event) =>
                    setEditingModule((current) =>
                      current ? { ...current, title: event.target.value } : null,
                    )
                  }
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3"
                  placeholder="Module title"
                />

                <textarea
                  value={editingModule.description}
                  onChange={(event) =>
                    setEditingModule((current) =>
                      current ? { ...current, description: event.target.value } : null,
                    )
                  }
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3"
                  rows={3}
                  placeholder="Module description"
                />
              </div>

              <div className="mt-4 flex justify-end gap-3">
                <button
                  onClick={() => setEditingModule(null)}
                  className="rounded-lg border border-slate-700 px-4 py-2"
                >
                  Cancel
                </button>
                <button
                  onClick={() => saveModuleChanges(module.id)}
                  className="rounded-lg bg-orange-500 px-4 py-2 text-slate-950"
                >
                  Save Module
                </button>
              </div>
            </div>
          )}

          <div className="mt-6 space-y-4">
            {module.lessons.map((lesson: any, index: number) => (
              <div key={lesson.id} className="flex items-center justify-between rounded-xl bg-slate-950 p-5">
                <div>
                  <h3 className="font-semibold">{lesson.title}</h3>
                  <p className="text-sm text-slate-400">Week {lesson.week} • Day {lesson.day}</p>
                  <p className="text-sm text-slate-500">{lesson.duration}</p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => handleMoveLesson(module.id, index, "up")}
                    disabled={index === 0}
                    className="rounded-lg border border-slate-700 px-3 py-2 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Move Up
                  </button>

                  <button
                    onClick={() => handleMoveLesson(module.id, index, "down")}
                    disabled={index === module.lessons.length - 1}
                    className="rounded-lg border border-slate-700 px-3 py-2 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Move Down
                  </button>

                  <button
                    onClick={() => openEditLesson(module.id, lesson)}
                    className="rounded-lg border border-slate-700 px-4 py-2"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(module.id, lesson.id)}
                    className="rounded-lg bg-red-500 px-4 py-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {showAddModal && (
        <AddLessonModal onClose={() => setShowAddModal(false)} onSave={handleAddLesson} />
      )}

      {showEditModal && selectedLesson && (
        <EditLessonModal
          lesson={selectedLesson}
          onClose={() => setShowEditModal(false)}
          onSave={handleEditLesson}
        />
      )}
    </div>
  );
}
