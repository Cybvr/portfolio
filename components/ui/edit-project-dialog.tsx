
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
  const [open, setOpen] = useState(false);
  const [editedProject, setEditedProject] = useState(project);
  const [newTag, setNewTag] = useState('');
  const [newTech, setNewTech] = useState('');

  const handleSave = () => {
    onSave(editedProject);
    setOpen(false);
  };

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

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          Edit Project
          <Edit2 className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl bg-card border border-border p-6 rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Edit Project</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-6 py-4">
          <div className="space-y-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium">Title</label>
              <Input
                value={editedProject.title}
                onChange={(e) => setEditedProject({ ...editedProject, title: e.target.value })}
                className="bg-input text-foreground"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">Description</label>
              <Textarea
                value={editedProject.description}
                onChange={(e) => setEditedProject({ ...editedProject, description: e.target.value })}
                className="bg-input text-foreground"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">Content</label>
              <Textarea
                value={editedProject.content}
                onChange={(e) => setEditedProject({ ...editedProject, content: e.target.value })}
                className="bg-input text-foreground"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">Industry</label>
              <Input
                value={editedProject.industry}
                onChange={(e) => setEditedProject({ ...editedProject, industry: e.target.value })}
                className="bg-input text-foreground"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium">Featured Image</label>
              <div className="flex gap-2">
                <Input
                  value={editedProject.featuredImage}
                  onChange={(e) => setEditedProject({ ...editedProject, featuredImage: e.target.value })}
                  placeholder="Enter image URL"
                  className="flex-1 bg-input text-foreground"
                />
              </div>
            </div>
            
            <div className="grid gap-2">
              <label className="text-sm font-medium">Tags</label>
              <div className="flex gap-2 mb-2 flex-wrap">
                {editedProject.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="gap-1">
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
                  className="bg-input text-foreground"
                />
                <Button type="button" onClick={addTag} size="icon" className="bg-primary text-primary-foreground">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium">Technologies</label>
              <div className="flex gap-2 mb-2 flex-wrap">
                {editedProject.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="gap-1">
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
                  className="bg-input text-foreground"
                />
                <Button type="button" onClick={addTech} size="icon" className="bg-primary text-primary-foreground">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium">Gallery Images (URLs, comma-separated)</label>
              <Input
                value={editedProject.gallery.join(', ')}
                onChange={(e) => setEditedProject({
                  ...editedProject,
                  gallery: e.target.value.split(',').map(url => url.trim())
                })}
                placeholder="Image URLs separated by commas"
                className="bg-input text-foreground"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <Button onClick={handleSave} className="bg-primary text-primary-foreground">
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
