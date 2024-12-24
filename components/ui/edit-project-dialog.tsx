
'use client';

import { useState } from 'react';
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";
import { Edit2, Plus, X } from "lucide-react";
import { Badge } from "./badge";
import type { PortfolioProject } from '@/types/portfolio';

interface EditProjectDialogProps {
  project: PortfolioProject;
  onSave: (project: PortfolioProject) => void;
}

export function EditProjectDialog({ project, onSave }: EditProjectDialogProps) {
  const [editedProject, setEditedProject] = useState(project);
  const [newTag, setNewTag] = useState('');
  const [newTech, setNewTech] = useState('');
  const [open, setOpen] = useState(false);

  const addTag = () => {
    if (newTag.trim()) {
      setEditedProject({
        ...editedProject,
        tags: [...editedProject.tags, newTag.trim()]
      });
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setEditedProject({
      ...editedProject,
      tags: editedProject.tags.filter(tag => tag !== tagToRemove)
    });
  };

  const addTech = () => {
    if (newTech.trim()) {
      setEditedProject({
        ...editedProject,
        technologies: [...editedProject.technologies, newTech.trim()]
      });
      setNewTech('');
    }
  };

  const removeTech = (techToRemove: string) => {
    setEditedProject({
      ...editedProject,
      technologies: editedProject.technologies.filter(tech => tech !== techToRemove)
    });
  };

  const handleSave = () => {
    onSave(editedProject);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          Edit Project
          <Edit2 className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)]">
        <DialogHeader>
          <DialogTitle className="text-[var(--foreground)]">Edit Project</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-6 py-4">
          <div className="space-y-4">
            <div className="grid gap-2">
              <label className="text-[var(--foreground)]">Title</label>
              <Input
                value={editedProject.title}
                onChange={(e) => setEditedProject({ ...editedProject, title: e.target.value })}
                className="bg-[var(--input)] text-[var(--foreground)]"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-[var(--foreground)]">Description</label>
              <Textarea
                value={editedProject.description}
                onChange={(e) => setEditedProject({ ...editedProject, description: e.target.value })}
                className="bg-[var(--input)] text-[var(--foreground)]"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-[var(--foreground)]">Content</label>
              <Textarea
                value={editedProject.content}
                onChange={(e) => setEditedProject({ ...editedProject, content: e.target.value })}
                className="bg-[var(--input)] text-[var(--foreground)]"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-[var(--foreground)]">Industry</label>
              <Input
                value={editedProject.industry}
                onChange={(e) => setEditedProject({ ...editedProject, industry: e.target.value })}
                className="bg-[var(--input)] text-[var(--foreground)]"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="grid gap-2">
              <label className="text-[var(--foreground)]">Featured Image</label>
              <div className="flex gap-2">
                <Input
                  value={editedProject.featuredImage}
                  onChange={(e) => setEditedProject({ ...editedProject, featuredImage: e.target.value })}
                  placeholder="Enter image URL"
                  className="flex-1 bg-[var(--input)] text-[var(--foreground)]"
                />
              </div>
            </div>
            
            <div className="grid gap-2">
              <label className="text-[var(--foreground)]">Tags</label>
              <div className="flex gap-2 mb-2 flex-wrap">
                {editedProject.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="gap-1 bg-[var(--secondary)]">
                    {tag}
                    <button onClick={() => removeTag(tag)} className="ml-1">
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  placeholder="Add new tag"
                  onKeyPress={(e) => e.key === 'Enter' && addTag()}
                  className="bg-[var(--input)] text-[var(--foreground)]"
                />
                <Button type="button" onClick={addTag} size="icon" className="bg-[var(--primary)]">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-[var(--foreground)]">Technologies</label>
              <div className="flex gap-2 mb-2 flex-wrap">
                {editedProject.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="gap-1 bg-[var(--secondary)]">
                    {tech}
                    <button onClick={() => removeTech(tech)} className="ml-1">
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  value={newTech}
                  onChange={(e) => setNewTech(e.target.value)}
                  placeholder="Add new technology"
                  onKeyPress={(e) => e.key === 'Enter' && addTech()}
                  className="bg-[var(--input)] text-[var(--foreground)]"
                />
                <Button type="button" onClick={addTech} size="icon" className="bg-[var(--primary)]">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <Button onClick={handleSave} className="bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90">
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
