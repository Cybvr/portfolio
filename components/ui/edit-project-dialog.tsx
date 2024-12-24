
'use client';

import { useState } from 'react';
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";
import { Edit2 } from "lucide-react";
import { Badge } from "./badge";
import type { PortfolioProject } from '@/types/portfolio';

interface EditProjectDialogProps {
  project: PortfolioProject;
  onSave: (project: PortfolioProject) => void;
}

export function EditProjectDialog({ project, onSave }: EditProjectDialogProps) {
  const [editedProject, setEditedProject] = useState(project);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          Edit Project
          <Edit2 className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit Project</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label>Title</label>
            <Input
              value={editedProject.title}
              onChange={(e) => setEditedProject({ ...editedProject, title: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <label>Description</label>
            <Textarea
              value={editedProject.description}
              onChange={(e) => setEditedProject({ ...editedProject, description: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <label>Content</label>
            <Textarea
              value={editedProject.content}
              onChange={(e) => setEditedProject({ ...editedProject, content: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <label>Industry</label>
            <Input
              value={editedProject.industry}
              onChange={(e) => setEditedProject({ ...editedProject, industry: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <label>Technologies</label>
            <div className="flex flex-wrap gap-2">
              {editedProject.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">{tech}</Badge>
              ))}
            </div>
          </div>
          <Button onClick={() => onSave(editedProject)}>Save Changes</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
