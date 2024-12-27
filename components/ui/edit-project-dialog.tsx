
'use client';

import { useState } from 'react';
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";
import { Edit2, Plus, X } from "lucide-react";
import { Badge } from "./badge";
import type { PortfolioProject } from '@/types/portfolio';
import { projects } from '@/data/portfolio';

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

  const handleSave = async () => {
    try {
      const updatedProjects = projects.map(p => p.id === editedProject.id ? editedProject : p);
      const response = await fetch('/api/portfolio/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProjects)
      });
      
      if (response.ok) {
        onSave(editedProject);
        setOpen(false);
      } else {
        throw new Error('Failed to update project');
      }
    } catch (error) {
      console.error('Save failed:', error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          Edit Project
          <Edit2 className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl bg-card text-foreground border border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">Edit Project</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-6 py-4">
          <div className="space-y-4">
            <div className="grid gap-2">
              <label className="text-foreground">Title</label>
              <Input
                value={editedProject.title}
                onChange={(e) => setEditedProject({ ...editedProject, title: e.target.value })}
                className="bg-input text-foreground"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-foreground">Description</label>
              <Textarea
                value={editedProject.description}
                onChange={(e) => setEditedProject({ ...editedProject, description: e.target.value })}
                className="bg-input text-foreground"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-foreground">Content</label>
              <Textarea
                value={editedProject.content}
                onChange={(e) => setEditedProject({ ...editedProject, content: e.target.value })}
                className="bg-input text-foreground"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-foreground">Industry</label>
              <Input
                value={editedProject.industry}
                onChange={(e) => setEditedProject({ ...editedProject, industry: e.target.value })}
                className="bg-input text-foreground"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-foreground">URL</label>
              <Input
                value={editedProject.url || ''}
                onChange={(e) => setEditedProject({ ...editedProject, url: e.target.value })}
                placeholder="https://"
                className="bg-input text-foreground"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="grid gap-2">
              <label className="text-foreground">Featured Image</label>
              <div className="flex gap-2">
                <Input
                  value={editedProject.featuredImage}
                  onChange={(e) => setEditedProject({ ...editedProject, featuredImage: e.target.value })}
                  placeholder="Enter image URL"
                  className="flex-1 bg-input text-foreground"
                />
                <Button 
                  type="button"
                  variant="outline"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  onClick={() => document.getElementById('imageUpload')?.click()}
                >
                  Choose Image
                </Button>
                <Input
                  id="imageUpload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const formData = new FormData();
                      formData.append('file', file);
                      
                      try {
                        const response = await fetch('/api/upload', {
                          method: 'POST',
                          body: formData,
                        });
                        
                        if (response.ok) {
                          const { filePath } = await response.json();
                          // Update both the UI state and the data source
                          setEditedProject(prev => ({
                            ...prev,
                            featuredImage: filePath,
                            dateUpdated: new Date().toISOString().split('T')[0]
                          }));
                        }
                      } catch (error) {
                        console.error('Upload failed:', error);
                      }
                    }
                  }}
                />
              </div>
            </div>
            
            <div className="grid gap-2">
              <label className="text-foreground">Tags</label>
              <div className="flex gap-2 mb-2 flex-wrap">
                {editedProject.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="gap-1 bg-secondary">
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
                <Button type="button" onClick={addTag} size="icon" className="bg-primary">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-foreground">Technologies</label>
              <div className="flex gap-2 mb-2 flex-wrap">
                {editedProject.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="gap-1 bg-secondary">
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
                <Button type="button" onClick={addTech} size="icon" className="bg-primary">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <Button onClick={handleSave} className="bg-primary text-primary-foreground hover:bg-primary">
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
